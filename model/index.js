import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://cmaccephas:cmaccephas@cluster0.tkhruix.mongodb.net/?retryWrites=true&w=majority";
const name = "Recipe-Master";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  const resolvers = {
    Query: {
      books: () => books,
    },
  };
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
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
  
  // start();