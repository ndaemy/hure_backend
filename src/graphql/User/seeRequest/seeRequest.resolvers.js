import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeRequest: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.users({
        where: { AND: [{ id }, { isConfirmed: false }] }
      });
    }
  }
};
