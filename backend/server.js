const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolver');


mongoose.connect('mongodb://localhost:27017/SmartManagment', {useNewUrlParser: true, useUnifiedTopology: true});
const con = mongoose.connection;


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});