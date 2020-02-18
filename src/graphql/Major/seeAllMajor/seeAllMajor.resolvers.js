import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAllMajor: async () => await prisma.majors({ orderBy: 'name_ASC' })
  }
};
