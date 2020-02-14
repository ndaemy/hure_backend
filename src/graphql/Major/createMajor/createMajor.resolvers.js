import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createMajor: async (_, args, { request, isAdmin }) => {
      isAdmin(request);

      return await prisma.createMajor(args);
    }
  }
};
