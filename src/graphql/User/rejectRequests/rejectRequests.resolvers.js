import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    rejectRequests: async (_, { id }, { request, isAdmin }) => {
      isAdmin(request);
      try {
        const idList = [];
        id.map(id => idList.push({ id: id }));

        const number = await prisma.deleteManyUsers({ OR: idList });
        if (id.length !== number.count) throw Error('Delete failed.');
      } catch (e) {
        console.log(e);
        return false;
      }
      return true;
    }
  }
};
