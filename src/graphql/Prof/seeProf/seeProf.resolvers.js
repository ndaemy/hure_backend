import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeProf: async (_, { id }, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      return await prisma.prof({ id });
    }
  }
};
