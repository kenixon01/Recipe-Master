import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cmaccephas:cmaccephas@cluster0.tkhruix.mongodb.net/?retryWrites=true&w=majority";
const name = "Recipe-Master";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const typeDefs = `
  type Object {

  }
  type Mutations {

  }

  type Query {

  }
`;

const resolvers = {
 Query: {

 },
 Mutation: {

 }
};

const start = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
await client.connect;

const db = client.db(name);

const context = { db, }

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);

start();