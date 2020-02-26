import { prisma } from '../../../generated/prisma-client';

export default {
  Major: {
    users: async ({ id }) => await prisma.major({ id }).users()
  }
};
