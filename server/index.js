const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MongoDB = "mongodb+srv://admin:admins@cluster0.pxlcoah.mongodb.net/?retryWrites=true&w=majority"
const getUserFromToken = async (token, db) => {
    if (!token) { return null }
  
    const tokenData = jwt.verify(token, JWT_SECRET);
    if (!tokenData?.id) {
      return null;
    }
    return await db.collection('Users').findOne({ _id: ObjectID(tokenData.id) });
  }

//Apollo Server

const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        const user = await getUserFromToken(req.headers.authorization);
        return {
          user,
        }
    }
});


mongoose.connect(MongoDB, {useNewUrlParser: true})
    .then(() => {
        console.log ("MongoDb Connection Successful");
        return server.listen({port: 5000});
    })
    .then ((res) => {
        console.log(`Server running at ${res.url}`);
    }); 