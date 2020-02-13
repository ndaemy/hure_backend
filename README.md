# HURE_backend

Hanyang Univ. Graduate School of Real Estate Convergence Reunion app backend  
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
- SENDGRID_API_KEY (required): Sendgrid API key

#### Example .env file

```
PORT=4000
JWT_SECRET="{ YOUR_JWT_ENCRYPT_KEY }"
SENDGRID_API_KEY="{ YOUR_SENDGRID_API_KEY }"
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
- [x] Create my profile (request)
- [x] Email confirm request
- [ ] Email confirm / Sign in
- [ ] Edit my profile

## Admin users

- [x] Sign in
- [x] Create user profile
  - TODO: Photo upload is not completed yet.
- [x] Create professor profile
  - TODO: Photo upload is not completed yet.
- [x] Edit professor profile
  - TODO: Photo edit is not completed yet.
- [x] Delete professor profile
- [ ] Edit user profile
- [x] Delete user profile
- [ ] Confirm requests
- [x] Create notice
  - TODO: File upload is not completed yet.
