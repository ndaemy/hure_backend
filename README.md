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
- [x] See specific professor
- [x] See notice
- [x] See lastest notice
- [x] See all users (with pagination / limit with major, generation)
- [x] See specific user
- [x] Search User by name, email, phone number, company
- [x] See all executives
- [x] Create my profile (request)
- [x] Email confirm request
- [x] Email confirm / Sign in
- [x] See my profile
- [x] Edit my profile

### Admin users

- [x] Sign in

---

- [x] Create user profile
- [x] Edit user profile
- [x] Delete user profile
- [x] See all requests
- [x] Confirm requests

---

- [x] Create professor profile
- [x] Edit professor profile
- [x] Delete professor profile

---

- [x] Create notice
- [ ] Edit notice
- [ ] Delete notice

---

- [x] See all graduated year
- [x] Create graduated year
- [x] Delete graduated year

---

- [x] Create major
- [x] Edit major

---

- [x] Create executive
- [ ] Edit executive
- [ ] Delete executive
