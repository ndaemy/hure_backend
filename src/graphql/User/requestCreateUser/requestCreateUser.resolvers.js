import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    requestCreateUser: async (_, args) => {
      const {
        name,
        birthday,
        email,
        cellPhone,
        company,
        companyDesc,
        team,
        position,
        workPhone,
        workAddress,
        photo,
        majorName,
        generation
      } = args;

      const major = await prisma.major({ name: majorName });
      const gradYear = await prisma.gradYear({ generation });
      if (!major) {
        throw Error('Major not exist. Please check your major.');
      }
      if (!gradYear) {
        throw Error(
          'Graduated year not exist. Please check your graduated year.'
        );
      }

      return await prisma.createUser({
        name,
        birthday,
        email,
        cellPhone,
        company,
        companyDesc,
        team,
        position,
        workPhone,
        workAddress,
        photo,
        isConfirmed: false,
        major: {
          connect: { name: majorName }
        },
        graduatedYear: {
          connect: { generation }
        }
      });
    }
  }
};
