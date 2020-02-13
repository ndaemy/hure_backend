import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createNotice: async (_, { title, desc }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.createNotice({ title, desc });
    }
  }
};
