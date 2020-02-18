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
- PRISMA_ENDPOINT (required): Prisma endpoint url

#### Example .env file

```text
PORT=4000
JWT_SECRET="{ YOUR_JWT_ENCRYPT_KEY }"
SENDGRID_API_KEY="{ YOUR_SENDGRID_API_KEY }"
PRISMA_ENDPOINT="{ YOUR_PRISMA_ENDPOINT_URL }"
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
- [x] Email confirm / Sign in
- [x] Edit my profile

### Admin users

- [x] Sign in

---

- [x] Create user profile
- [x] Edit user profile
- [x] Delete user profile
- [x] Confirm request

---

- [x] Create professor profile
  - TODO: Photo upload is not completed yet.
- [x] Edit professor profile
  - TODO: Photo edit is not completed yet.
- [x] Delete professor profile

---

- [x] Create notice
- [ ] Edit notice
- [ ] Delete notice

---

- [x] See all graduated year
- [x] Create graduated year

---

- [x] Create major
