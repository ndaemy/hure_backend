import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    searchUser: async (_, { query }, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.users({
        where: {
          AND: [
            {
              OR: [
                { name_contains: query },
                { cellPhone_contains: query },
                { company_contains: query },
                {
                  major: {
                    name_contains: query
                  }
                }
              ]
            },
            { isConfirmed: true }
          ]
        },
        orderBy: 'name_ASC'
      });
    }
  }
};
