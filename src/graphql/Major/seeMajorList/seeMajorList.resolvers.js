import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeMajorList: async () => await prisma.majors({ orderBy: 'name_ASC' })
  }
};
