import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllRequest: async (_, __, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.users({ where: { isConfirmed: false } });
    }
  }
};
