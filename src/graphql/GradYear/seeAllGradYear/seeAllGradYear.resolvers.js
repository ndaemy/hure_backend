import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllGradYear: async () =>
      await prisma.gradYears({ orderBy: 'generation_DESC' })
  }
};
