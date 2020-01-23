import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 4000;

const typeDefs = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hi'
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({ port: PORT }, () =>
  console.log(`Server is now running on http://localhost:${PORT}`)
);
