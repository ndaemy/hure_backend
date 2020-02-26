import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createUser: async (_, args, { request, isAdmin }) => {
      isAdmin(request);
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
        companyDesc,
        team,
        position,
        workPhone,
        workAddress,
        photo,
        isConfirmed: true,
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
