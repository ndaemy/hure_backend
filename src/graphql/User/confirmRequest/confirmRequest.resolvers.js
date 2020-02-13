import { prisma } from '../../../../generated/prisma-client';
import { sendRequestConfirmedMail } from '../../../utils';

export default {
  Mutation: {
    confirmRequest: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      try {
        const user = await prisma.updateUser({
          where: { id },
          data: {
            isConfirmed: true
          }
        });
        await sendRequestConfirmedMail(user.email);
      } catch (e) {
        console.log(e);
        return false;
      }
      return true;
    }
  }
};
