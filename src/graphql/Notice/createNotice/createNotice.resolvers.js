import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createNotice: async (_, { title, desc }, { request, isAuthenticated }) => {
      isAuthenticated(request);
      return await prisma.createNotice({ title, desc });
    }
  }
};
