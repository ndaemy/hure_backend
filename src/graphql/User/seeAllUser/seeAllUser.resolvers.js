import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllUser: async (_, { limit, page }) =>
      await prisma.users({
        orderBy: 'name_ASC',
        skip: limit * (page - 1),
        first: limit
      })
  }
};
