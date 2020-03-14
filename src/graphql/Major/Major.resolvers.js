import { prisma } from '../../../generated/prisma-client';

export default {
  Major: {
    users: async ({ id }) => await prisma.major({ id }).users(),
    profs: async ({ id }) => await prisma.major({ id }).profs(),
    howManyUsers: async ({ id }) =>
      await prisma
        .usersConnection({
          where: { AND: [{ isConfirmed: true }, { major: { id } }] }
        })
        .aggregate()
        .count(),
    howManyProfs: async ({ id }) =>
      await prisma
        .profsConnection({
          where: { major: { id } }
        })
        .aggregate()
        .count()
  }
};
