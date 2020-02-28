import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllUser: async (_, args, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      const { limit, page, major, generation } = args;

      return await prisma.users({
        orderBy: 'name_ASC',
        skip: limit * (page - 1),
        first: limit,
        where: {
          AND: [
            { isConfirmed: true },
            { major: { name: major } },
            { graduatedYear: { generation: generation } }
          ]
        }
      });
    }
  }
};
