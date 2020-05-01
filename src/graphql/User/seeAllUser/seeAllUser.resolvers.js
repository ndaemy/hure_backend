import { prisma } from '../../../../generated/prisma-client'

const compareByName = (a, b) => {
  if (a.name > b.name) return 1
  if (a.name < b.name) return -1
  if (a.name === b.name) return 0
}

export default {
  Query: {
    seeAllUser: async (_, args, { request, isAdminOrUser }) => {
      isAdminOrUser(request)
      const { limit, page, major, generation } = args

      const users = await prisma.users({
        orderBy: 'name_ASC',
        where: {
          AND: [
            { isConfirmed: true },
            { major: { name: major } },
            { graduatedYear: { generation } },
          ],
        },
      })

      return users
        .sort(compareByName)
        .slice((page - 1) * limit, (page - 1) * limit + limit)
    },
  },
}
