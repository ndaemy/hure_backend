import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllNotice: async () =>
      await prisma.notices({ orderBy: 'createdAt_DESC' })
  }
};
