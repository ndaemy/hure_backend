import { prisma } from '../../../../generated/prisma-client';
import { sendRequestConfirmedMail } from '../../../utils';

export default {
  Mutation: {
    confirmRequests: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      try {
        const idList = [];
        id.map(id => idList.push({ id: id }));

        const number = await prisma.updateManyUsers({
          where: {
            OR: idList
          },
          data: {
            isConfirmed: true
          }
        });
        if (id.length !== number.count) throw Error('Update failed.');

        id.map(async id => {
          const user = await prisma.user({ id });
          await sendRequestConfirmedMail(user.email);
        });
      } catch (e) {
        console.log(e);
        return false;
      }
      return true;
    }
  }
};
