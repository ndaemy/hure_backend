import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editMe: async (_, args, { request, isUser }) => {
      isUser(request);
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

      let companyDescArray = null;
      if (companyDesc && companyDesc !== '') {
        companyDescArray = companyDesc.split(/\r?\n/);
      }

      return await prisma.updateUser({
        where: { id: request.user.id },
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
