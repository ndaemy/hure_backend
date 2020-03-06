# HURE_backend

Hanyang Univ. Graduate School of Real Estate Convergence Reunion app backend  
한양대학교 부동산융합대학원 원우회 앱 backend

## RESTful API

| Method | Address     | Description                             |
| ------ | ----------- | --------------------------------------- |
| GET    | /           | GraphQL Playground                      |
| POST   | /           | GraphQL Server                          |
| POST   | /api/upload | File upload to S3 and returns file link |

## GraphQL Resolvers

### Queries

- isAdmin: Boolean
- signIn(username, passwd): Token
- seeAllExecutive: Executive[]
- seeAllGradYear: GradYear[]
- seeAllMajor: Major[]
- howManyNotice: Int
- seeAllNotice(limit, page): Notice[]
- seeLatestNotice: Notice
- seeNotice(id): Notice
- seeAllProf: Prof[]
- seeProf(id): Prof
- howManyRequest: Int
- howManyUser(...): Int
- searchUser(query): User[]
- seeAllRequest(limit, page): User[]
- seeAllUser(...): User[]
- seeMe: User
- seeUser: User[]

### Mutations

- createExecutive(...): Executive
- createGradYear(...): GradYear
- deleteGradYear(...): Boolean
- createMajor(...): Major
- editMajor(...): Major
- createNotice(...): Notice
- deleteNotice(...): Notice
- editNotice(...): Notice
- createProf(...): Prof
- deleteProf(...): Prof
- editProf(...): Prof
- confirmRequests(...): Boolean
- confirmSecret(...): Token
- createUser(...): User
- deleteUser(...): User
- editMe(...): User
- editUser(...): User
- rejectRequests(...): Boolean
- requestCreateUser(...): User
- requestSecret(...): Boolean

_Detail descriptions are described in GraphQL Playground._
