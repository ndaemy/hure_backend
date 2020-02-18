import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeLatestNotice: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.notices({ orderBy: 'createdAt_ASC', last: 1 });
    }
  }
};
