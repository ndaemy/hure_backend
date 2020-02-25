import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeUser: async (_, { id }, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.users({
        where: { AND: [{ id }, { isConfirmed: true }] }
      });
    }
  }
};
