import { prisma } from '../../../generated/prisma-client';

export default {
  Prof: {
    major: async ({ id }) => await prisma.prof({ id }).major()
  }
};
