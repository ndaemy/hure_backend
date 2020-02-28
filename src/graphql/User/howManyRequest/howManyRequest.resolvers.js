import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    howManyRequest: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);

      return await prisma
        .usersConnection({ where: { isConfirmed: false } })
        .aggregate()
        .count();
    }
  }
};
