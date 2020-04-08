import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editMajor: async (_, { id, name }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.updateMajor({
        where: { id },
        data: { name, shortName },
      });
    },
  },
};
