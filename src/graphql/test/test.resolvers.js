import { prisma } from '../../../generated/prisma-client';

export default {
  Query: {
    hello: () => 'Hello GraphQL!',
    helloUser: async (_, { id }) => await prisma.user({ id })
  }
};
