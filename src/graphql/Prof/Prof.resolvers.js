import { prisma } from '../../../generated/prisma-client';

export default {
  Prof: {
    photo: async ({ id }) => await prisma.prof({ id }).photo()
  }
};
