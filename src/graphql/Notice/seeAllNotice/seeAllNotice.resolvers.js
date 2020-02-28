import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllNotice: async (_, { limit, page }, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.notices({
        orderBy: 'createdAt_DESC',
        skip: limit * (page - 1),
        first: limit
      });
    }
  }
};
