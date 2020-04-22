import { prisma } from '../../../../generated/prisma-client';

const compareByTitle = (a, b) => {
  if (a.generation < b.generation) return -1;
  else if (a.generation > b.generation) return 1;
  else {
    if (a.title > b.title) return -1;
    else if (a.title < b.title) return 1;
    else return 0;
  }
};

export default {
  Query: {
    seeAllExecutive: async (_, __, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      const originalArray = await prisma.executives({
        orderBy: 'generation_ASC',
      });
      return originalArray.sort(compareByTitle);
    },
  },
};
