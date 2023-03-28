const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MongoDB = "mongodb+srv://admin:admins@cluster0.pxlcoah.mongodb.net/?retryWrites=true&w=majority"

//Apollo Server

const typeDefs = require('./graphql/typeDefs.js');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
  
});


mongoose.connect(MongoDB, {useNewUrlParser: true})
    .then(() => {
        console.log ("MongoDb Connection Successful");
        return server.listen({port: 5000});
    })
    .then ((res) => {
        console.log(`Server running at ${res.url}`);
    }); 