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
        photo,
        majorName
      } = args;

      const major = await prisma.major({ name: majorName });
      if (!major) {
        throw Error('Major not exist. Please make major first.');
      }

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
          photo,
          major: {
            connect: { name: majorName }
          }
        }
      });
    }
  }
};
