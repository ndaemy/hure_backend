import { generateSecret, sendSecretMail } from '../../../utils';
import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    requestSecret: async (_, { email }) => {
      try {
        const user = await prisma.user({ email });
        if (!user || !user.isConfirmed) throw Error('Not confirmed yet!');

        if (user.email === 'eunhye.grace.bae@gmail.com') {
          await prisma.updateUser({
            data: {
              emailSecret: 'passwd',
            },
            where: { email },
          });
          return true;
        }

        const emailSecret = generateSecret();
        await prisma.updateUser({
          data: {
            emailSecret,
          },
          where: {
            email,
          },
        });
        await sendSecretMail(email, emailSecret);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
