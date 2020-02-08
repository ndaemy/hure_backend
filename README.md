# HYRE_backend

Hanyang Univ. Real Estate Graduate School reunion app backend  
한양대학교 부동산융합대학원 원우회 앱 backend

## How to launch server

```shell
yarn install
yarn global add prisma
prisma generate
# after you set your prisma server
prisma deploy
```

## Environment files

### .env

- PORT (optional): port number of GraphQL Server / Playground
- JWT_SECRET (required): Passport.js JWT secret key

#### Example .env file

```
PORT=4000
JWT_SECRET="{ YOUR_JWT_ENCRYPT_KEY }"
```

---

### prisma.yml

```yml
endpoint: { YOUR_PRISMA_SERVER_ENDPOINT }
datamodel: datamodel.prisma

generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```

## User stories

There are two types of users:

- Normal users
- Admin users

### Normal users

- [x] See professors
- [x] See notice
- [x] See lastest notice
- [x] See all users (with pagination / limit with major, generation)
- [x] Search User by name, email, phone number, company
- [ ] Create my profile (request)
- [ ] Edit my profile (request)

## Admin users

- [x] Sign in
- [x] Create user profile
  - TODO: Photo upload is not completed yet.
- [x] Create professor profile
  - TODO: Photo upload is not completed yet.
- [ ] Edit professor profile
- [x] Delete professor profile
- [ ] Edit user profile
- [ ] Delete user profile
- [ ] Confirm requests
- [ ] Create notice
