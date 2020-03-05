import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeNotice: async (_, { id }, { request, isAdminOrUser }) => {
      isAdminOrUser(request);

      return await prisma.notice({ id });
    }
  }
};
