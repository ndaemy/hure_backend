import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    howManyNotice: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma
        .noticesConnection()
        .aggregate()
        .count();
    }
  }
};
