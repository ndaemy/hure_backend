import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllUser: async (_, { limit, page, major, generation }) => {
      return await prisma.users({
        orderBy: 'name_ASC',
        skip: limit * (page - 1),
        first: limit,
        where: {
          AND: [
            { isConfirmed: true },
            { major: { name: major } },
            { graduated_year: { generation: generation } }
          ]
        }
      });
    }
  }
};
