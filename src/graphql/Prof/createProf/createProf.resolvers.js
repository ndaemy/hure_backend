import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createProf: async (_, args, { request, isAdmin }) => {
      isAdmin(request);
      const {
        name,
        title,
        position,
        email,
        workPhone,
        company,
        order,
        photo,
        majorName
      } = args;

      const major = await prisma.major({ name: majorName });
      if (!major) {
        throw Error('Major not exist. Please make major first.');
      }

      return await prisma.createProf({
        name,
        title,
        position,
        email,
        workPhone,
        company,
        order,
        photo,
        major: {
          connect: { name: majorName }
        }
      });
    }
  }
};
