import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    howManyUser: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma
        .usersConnection()
        .aggregate()
        .count();
    }
  }
};
