import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllNotice: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.notices({ orderBy: 'createdAt_DESC' });
    }
  }
};
