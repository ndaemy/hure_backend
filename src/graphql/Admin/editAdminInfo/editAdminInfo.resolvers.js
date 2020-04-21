import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editAdminInfo: async (_, { name, phone, email }, { request, isAdmin }) => {
      isAdmin(request);

      const {
        name: newName,
        phone: newPhone,
        email: newEmail,
      } = await prisma.updateAdmin({
        where: { username: 'admin' },
        data: { name, phone, email },
      });

      return [newName, newPhone, newEmail];
    },
  },
};
