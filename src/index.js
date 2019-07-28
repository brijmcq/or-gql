import { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers';
import prisma from './prisma';


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
      prisma
    },
});

server.start({ port: process.env.PORT || 4000 },() => {
  console.log('server is up on port', process.env.PORT || 4000);
});