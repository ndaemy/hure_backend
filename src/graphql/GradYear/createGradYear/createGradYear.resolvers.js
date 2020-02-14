import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createGradYear: async (_, args, { request, isAdmin }) => {
      isAdmin(request);

      const { year, semester } = args;

      const constraint = await prisma.$exists.gradYear({
        AND: [{ year }, { semester }]
      });
      if (constraint) throw Error("Same year & semester tuple can't be exist.");

      return await prisma.createGradYear(args);
    }
  }
};
