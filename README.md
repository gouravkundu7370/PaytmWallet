## Setup of the project locally

- Clone the repo
```jsx
git clone https://github.com/gouravkundu7370/PaytmWallet.git
```

- npm install
- Run postgres either locally or on the cloud 

```jsx
docker run  -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

- Copy over all .env.example files to .env
- Update .env files everywhere with the right db url
- Go to `packages/db`
    - npx prisma migrate dev
    - npx prisma db seed
- Go to `apps/user-app` , run `npm run dev`
- Try logging in using phone - 1111111111 , password - rahul (See `seed.ts`)


## Doing The actions in the wallet
- go to localhost:3001 for user-app
- go to localhost:3000 for merchant-app (not complete)
- mimic the bank-webhook in localhost:3003 in postman (see index.ts in bank-webhook->src->index.ts) for clearing the the addMoney transaction from server