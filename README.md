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

#### Example .env file

```
PORT=4000
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
