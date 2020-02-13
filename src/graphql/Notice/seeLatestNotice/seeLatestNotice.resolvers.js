import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeLatestNotice: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.notices({ last: 1 });
    }
  }
};
