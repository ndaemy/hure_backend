import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    howManyUser: async (_, args, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      const { major, generation } = args;

      return await prisma
        .usersConnection({
          where: {
            AND: [
              { isConfirmed: true },
              { major: { name: major } },
              { graduatedYear: { generation: generation } }
            ]
          }
        })
        .aggregate()
        .count();
    }
  }
};
