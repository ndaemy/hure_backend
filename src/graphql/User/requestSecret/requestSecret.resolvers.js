import { generateSecret, sendSecretMail } from '../../../utils';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    requestSecret: async (_, { email }) => {
      const emailSecret = generateSecret();
      try {
        const user = await prisma.updateUser({
          data: {
            emailSecret
          },
          where: {
            email
          }
        });
        await sendSecretMail(email, emailSecret);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }
};
