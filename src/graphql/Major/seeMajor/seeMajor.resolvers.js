import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeMajor: async (_, { id }) => await prisma.major({ id }),
  },
};
