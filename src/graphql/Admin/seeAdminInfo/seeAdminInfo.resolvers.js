import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    seeAdminInfo: async () => {
      const { name, phone, email } = await prisma.admin({ username: 'admin' });

      return [name, phone, email];
    }
  }
};
