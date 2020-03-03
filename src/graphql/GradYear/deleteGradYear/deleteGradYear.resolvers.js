import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteGradYear: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.deleteGradYear({ id });
    }
  }
};
