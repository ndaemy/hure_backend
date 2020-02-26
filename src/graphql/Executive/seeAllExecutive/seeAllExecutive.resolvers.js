import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllExecutive: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.executives({
        orderBy: 'generation_ASC'
      });
    }
  }
};
