import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editProf: async (_, args, { request, isAdmin }) => {
      isAdmin(request);
      const {
        id,
        name,
        email,
        workPhone,
        position,
        title,
        company,
        order,
        photo
      } = args;

      return await prisma.updateProf({
        where: { id },
        data: {
          name,
          email,
          workPhone,
          position,
          title,
          company,
          order,
          photo
        }
      });
    }
  }
};
