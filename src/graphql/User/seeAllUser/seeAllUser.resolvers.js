import { prisma } from '../../../../generated/prisma-client';

const FRAGMENT = `
  fragment Userparts on User {
    id
    name
    birthday
    email
    cellPhone
    company
    companyDesc
    team
    position
    workPhone
    workAddress
    photo
    isConfirmed
    major {
      name
    }
    graduatedYear {
      generation
    }
  }
`;

const compareByGenName = (a, b) => {
  if (a.graduatedYear.generation > b.graduatedYear.generation) return 1;
  if (a.graduatedYear.generation < b.graduatedYear.generation) return -1;
  if (a.graduatedYear.generation === b.graduatedYear.generation) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    if (a.name === b.name) return 0;
  }
};

export default {
  Query: {
    seeAllUser: async (_, args, { request, isAdminOrUser }) => {
      isAdminOrUser(request);
      const { limit, page, major, generation } = args;

      const users = await prisma
        .users({
          orderBy: 'name_ASC',
          where: {
            AND: [
              { isConfirmed: true },
              { major: { name: major } },
              { graduatedYear: { generation } },
            ],
          },
        })
        .$fragment(FRAGMENT);

      return users
        .sort(compareByGenName)
        .slice((page - 1) * limit, (page - 1) * limit + limit);
    },
  },
};
