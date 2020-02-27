import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editUser: async (_, args, { request, isAdmin }) => {
      isAdmin(request);
      const {
        id,
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

      let companyDescArray = null;
      if (companyDesc && companyDesc !== '') {
        companyDescArray = companyDesc.split(/\r?\n/);
      }

      return await prisma.updateUser({
        where: { id },
        data: {
          name,
          birthday,
          email,
          cellPhone,
          company,
          companyDesc: {
            set: companyDescArray
          },
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
        }
      });
    }
  }
};
