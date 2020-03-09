import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    confirmRequest: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.updateUser({
        where: { id },
        data: { isConfirmed: true }
      });
    }
  }
};
