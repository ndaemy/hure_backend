import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createExecutive: async (_, args, { request, isAdmin }) => {
      const { generation, title, userEmail } = args;
      isAdmin(request);

      return await prisma.createExecutive({
        generation,
        title,
        user: {
          connect: {
            email: userEmail,
          },
        },
      });
    },
  },
};
