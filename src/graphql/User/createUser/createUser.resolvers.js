import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createUser: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const {
        name,
        birthday,
        email,
        cellPhone,
        company,
        companyCategory,
        team,
        position,
        workPhone,
        workAddress,
        majorName,
        generation
      } = args;

      const major = await prisma.major({ name: majorName });
      const gradYear = await prisma.gradYear({ generation });
      if (!major) {
        throw Error('Major not exist. Please make major first.');
      }
      if (!gradYear) {
        throw Error('Graduated year not exist. Please make generation first.');
      }

      return await prisma.createUser({
        name,
        birthday,
        email,
        cellPhone,
        company,
        companyCategory,
        team,
        position,
        workPhone,
        workAddress,
        isConfirmed: true,
        major: {
          connect: { name: majorName }
        },
        graduatedYear: {
          connect: { generation }
        },
        photo: {
          connect: { id: 'ck611mszfgevm0901zo02ntsg' }
        }
      });
    }
  }
};
