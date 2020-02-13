import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllProf: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.profs({ orderBy: 'order_ASC' });
    }
  }
};
