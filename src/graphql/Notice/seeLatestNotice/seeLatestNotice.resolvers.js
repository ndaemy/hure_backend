import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeLatestNotice: async () => await prisma.notices({ last: 1 })
  }
};
