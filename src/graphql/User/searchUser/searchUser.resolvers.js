import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    searchUser: async (_, { query }) =>
      await prisma.users({
        where: {
          OR: [
            { name_contains: query },
            { email_contains: query },
            { cellPhone_contains: query },
            { company_contains: query }
          ]
        },
        orderBy: 'name_ASC'
      })
  }
};
