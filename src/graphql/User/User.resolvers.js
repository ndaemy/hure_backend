import { prisma } from '../../../generated/prisma-client';

export default {
  User: {
    major: async ({ id }) => await prisma.user({ id }).major(),
    graduated_year: async ({ id }) =>
      await prisma.user({ id }).graduated_year(),
    photo: async ({ id }) => await prisma.user({ id }).photo()
  }
};
