import { prisma } from '../../../../generated/prisma-client';

import { generateToken } from '../../../jsonwebtoken';

export default {
  Query: {
    signIn: async (_, { username, passwd }) => {
      const admin = await prisma.admin({ username });
      if (!admin) {
        throw Error('There is no such admin.');
      } else if (admin.password === passwd) {
        return generateToken(admin.id);
      } else {
        throw Error('Wrong username/password combination.');
      }
    }
  }
};
