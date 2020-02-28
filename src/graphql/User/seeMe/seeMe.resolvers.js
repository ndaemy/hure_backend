import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeMe: async (_, __, { request, isUser }) => {
      isUser(request);
      return await prisma.user({ id: request.user.id });
    }
  }
};
