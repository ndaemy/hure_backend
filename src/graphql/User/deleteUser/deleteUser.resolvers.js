import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteUser: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.deleteUser({ id });
    }
  }
};
