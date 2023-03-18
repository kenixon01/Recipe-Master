const { ApolloServer, gql } = require('apollo-server');
const { MongoClient, ObjectID } = require('mongodb');
const dotenv = require('dotenv');
const axios = require('axios').default

dotenv.config();
const { DB_URI, DB_NAME} = process.env;

const typeDefs = gql`
  type User {
    name: String
    email: String
    password: String
    userName: String
  }

  input addUserInput {
    name: String
    email: String
    password: String
    userName: String
  }

  type Query { 
    getUsers (name: String, email: String): [User]
  }
  type Mutation {
    addUser(input: addUserInput): User

  }
`;

// type Mutation {
//   createItem(name: String!, aisle: String!): Item!
// }




const resolvers = {
  Query:  {
    getUsers : async(_,__,{db}) => {

    }
  },

  Mutation: {
    addUser : async (_,{ input },{ db }) => {
            const newUser = { ...input }
            console.log(input)
            const result = await db.collection('User').insertOne(newUser)
            return results;  
    }
  },

};


const start = async () => {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db(DB_NAME);
 
  const context = {
    db,
  }
  
  const server = new ApolloServer({
      typeDefs,
      resolvers,
      context,
      introspection: true
  }); 

  const ID = '641facf1';
  const KEY = '3bd1c423730ce9650260fd3d5cdabe98';
  const TAG = 'potato';
  async function fetchData(id, key, tag) {
    // const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${ID}&app_key=${KEY}&tag=${TAG}`;
    const response = await fetch(`https://api.edamam.com/search?q=${TAG}&app_id=${ID}&app_key=${KEY}`);
    const data = await response.json();
    console.log(data.hits)
    // data.hits.forEach(element => {
    //   console.log(element.recipe.source)
    //   console.log(element.recipe.url)
    // });
    return data.hits
  }
  fetchData(ID, KEY, 'potato');
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url + 'quickkart'}`);
  });
}

start();