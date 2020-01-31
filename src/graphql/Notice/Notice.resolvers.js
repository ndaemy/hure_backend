import { prisma } from '../../../generated/prisma-client';

export default {
  Notice: {
    files: async ({ id }) => await prisma.notice({ id }).files()
  }
};
