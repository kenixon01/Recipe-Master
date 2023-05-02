const { ApolloServer, gql } = require('apollo-server');
const { MongoClient, ObjectID } = require('mongodb');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
dotenv.config();

//const { DB_URI, DB_NAME, JWT_SECRET } = process.env;

const DB_URI = "mongodb+srv://admin:admins@cluster0.pxlcoah.mongodb.net/?retryWrites=true&w=majority"
const DB_NAME = "recipe"
const JWT_SECRET = "ThisIsTheSecretKey"


const getToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '5 minutes' });

const getUserFromToken = async (token, db) => {
  if (!token) { return null }

  const tokenData = jwt.verify(token, JWT_SECRET);
  if (!tokenData?.id) {
    return null;
  }
  return await db.collection('Users').findOne({ _id: ObjectID(tokenData.id) });
}

const typeDefs = gql`
  type Query {
    findUser(id: ID!): User!
  }

  type Mutation {
    signUp(input: SignUpInput!): AuthUser!
    signIn(input: SignInInput!): AuthUser!
    updateUser(input: UpdateInput!):User!
    deleteUser(input: DeleteInput!): Boolean!
  }

  input SignUpInput {
    email: String!
    password: String!
    name: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
  input UpdateInput{
    email: String!
    name: String!
    password: String!
  }


  input DeleteInput{
    email: String!
  }

  type AuthUser {
    user: User!
    token: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
  input update{
  name: String
  email: String
  password: String
  }

  

`;

const resolvers = {
  Query: {
    findUser: async (_,{id}, {db, user}) => {
      if (!user) { 
        throw new Error('Authentication Error. Please sign in'); }
      
      return await db.collection('Users').findOne({_id: ObjectID(id)});
    },
  },
  Mutation: {
    signUp: async (_, { input }, { db }) => {
      const old = await db.collection('Users').findOne({email: input.email})
      if (old) {
        throw new Error('Email is taken by existing user')
      }


      const hashedPassword = bcrypt.hashSync(input.password);
      const newUser = {
        email: input.email,
       // ...input,
        password: hashedPassword,
        name: input.name,
      }
      // save to database
      const user = await db.collection('Users').insertOne(newUser);
      return {
        user,
        token: getToken(user),
      }
    },

    signIn: async (_, { input }, { db }) => {
      const user = await db.collection('Users').findOne({ email: input.email });
      const isPasswordCorrect = user && bcrypt.compareSync(input.password, user.password);

      if (!user || !isPasswordCorrect) {
        throw new Error('Invalid credentials!');
      }
      return {
        user,
        token: getToken(user),
      }
    },

    updateUser: async (_, {input}, {db} ) => {
    const user =  await db.collection('Users').findOne({ email: input.email });
    if (!user) {
      throw new Error ('Authentication Error. Please sign in');
    }
    if (user){
    const encypt = bcrypt.hashSync(input.password);
    await db.collection('Users').updateOne({email: input.email},
      {$set:{
        email: input.email,
        name: input.name,
        password: encypt,
      }})
    }
   return {
    user
   }

    },

    deleteUser: async(_, { input }, { db }) => {
      const user = await db.collection('Users').findOne({ email: input.email });
      if (!user) { throw new Error('Error in finding User'); }
      if (user){
        await db.collection('Users').deleteOne({ email: (input.email) });
      }
      return true;
    },
  },
  User: {
    id: ({ _id, id }) => _id || id,
  },

};

const start = async () => {
  const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db(DB_NAME);

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: async ({ req }) => {
      const user = await getUserFromToken(req.headers.authorization, db);
      return {
        db,
        user,
      }
    },
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

start();