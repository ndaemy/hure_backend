import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllGradYear: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.gradYears({ orderBy: 'generation_DESC' });
    }
  }
};
