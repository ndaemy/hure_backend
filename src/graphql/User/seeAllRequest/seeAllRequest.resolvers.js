import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllRequest: async (_, { limit, page }, { request, isAdmin }) => {
      isAdmin(request);

      return await prisma.users({
        orderBy: 'name_ASC',
        skip: limit * (page - 1),
        first: limit,
        where: { isConfirmed: false }
      });
    }
  }
};
