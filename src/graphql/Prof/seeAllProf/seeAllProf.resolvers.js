import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllProf: async () => await prisma.profs({ orderBy: 'order_ASC' })
  }
};
