import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    rejectRequest: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.deleteUser({ id });
    }
  }
};
