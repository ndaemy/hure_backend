import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createProf: async (_, args, { request, isAdmin }) => {
      isAdmin(request);
      const { name, email, workPhone, position, title, company, order } = args;

      return await prisma.createProf({
        name,
        email,
        workPhone,
        position,
        title,
        company,
        order
      });
    }
  }
};
