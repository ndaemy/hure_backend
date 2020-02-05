import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllUser: async (_, { limit, page, major, generation }) => {
      if (major) {
      }
      return await prisma.users({
        orderBy: 'name_ASC',
        skip: limit * (page - 1),
        first: limit,
        where: {
          AND: [
            { major: { name: major } },
            { graduated_year: { generation: generation } }
          ]
        }
      });
    }
  }
};
