import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteUser: async (_, { id }, { request, isAuthenticated }) => {
      isAuthenticated(request);
      return await prisma.deleteUser({ id });
    }
  }
};
