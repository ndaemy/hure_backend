import { prisma } from '../../../../generated/prisma-client';
import { generateToken } from '../../../jsonwebtoken';

export default {
  Mutation: {
    confirmSecret: async (_, { email, secret }) => {
      const user = await prisma.user({ email });
      if (!user) {
        throw Error('There is no such user.');
      } else if (user.emailSecret === secret) {
        await prisma.updateUser({
          where: { id: user.id },
          data: { emailSecret: null }
        });
        return generateToken(user.id);
      } else {
        throw Error('Wrong email secret. Please check again.');
      }
    }
  }
};
