import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editProf: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const {
        id,
        name,
        email,
        workPhone,
        position,
        title,
        company,
        order
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
          photo: {
            connect: { id: 'ck611mszfgevm0901zo02ntsg' }
          }
        }
      });
    }
  }
};
