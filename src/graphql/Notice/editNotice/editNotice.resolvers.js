import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editNotice: async (_, { id, title, desc }, { request, isAdmin }) => {
      isAdmin(request);
      return await prisma.updateNotice({
        where: {
          id
        },
        data: {
          title,
          desc
        }
      });
    }
  }
};
