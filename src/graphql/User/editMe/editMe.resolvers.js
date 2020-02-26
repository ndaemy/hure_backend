import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    editMe: async (_, args, { request, isUser }) => {
      isUser(request);
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
      if (request.user.id !== id)
        throw Error('You are not allowed to edit other person!');

      const major = await prisma.major({ name: majorName });
      const gradYear = await prisma.gradYear({ generation });
      if (!major) {
        throw Error('Major not exist. Please make major first.');
      }
      if (!gradYear) {
        throw Error('Graduated year not exist. Please make generation first.');
      }

      return await prisma.updateUser({
        where: { id },
        data: {
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
        }
      });
    }
  }
};
