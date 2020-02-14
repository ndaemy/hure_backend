import { prisma } from '../../../generated/prisma-client';

export default {
  User: {
    major: async ({ id }) => await prisma.user({ id }).major(),
    graduatedYear: async ({ id }) => await prisma.user({ id }).graduatedYear()
  }
};
