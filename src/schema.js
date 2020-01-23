import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, '/graphql/**/*.graphql'));
const resolvers = fileLoader(path.join(__dirname, '/graphql/**/*.resolvers.*'));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(typesArray),
  resolvers: mergeResolvers(resolvers)
});

export default schema;
