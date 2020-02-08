import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteProf: async (_, { id }, { request, isAuthenticated }) => {
      isAuthenticated(request);
      return await prisma.deleteProf({ id });
    }
  }
};
