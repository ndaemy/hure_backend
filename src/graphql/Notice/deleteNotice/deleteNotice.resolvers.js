import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    deleteNotice: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.deleteNotice({ id });
    }
  }
};
