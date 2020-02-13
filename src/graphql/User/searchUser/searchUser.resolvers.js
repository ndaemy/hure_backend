import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    searchUser: async (_, { query }) =>
      await prisma.users({
        where: {
          AND: [
            {
              OR: [
                { name_contains: query },
                { email_contains: query },
                { cellPhone_contains: query },
                { company_contains: query }
              ]
            },
            { isConfirmed: true }
          ]
        },
        orderBy: 'name_ASC'
      })
  }
};
