import { prisma } from '../../../generated/prisma-client';

export default {
  Executive: {
    user: async ({ id }) => await prisma.executive({ id }).user()
  }
};
