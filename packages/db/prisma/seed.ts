import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const rahul = await prisma.user.upsert({
    where: { number: "1111111111" },
    update: {},
    create: {
      id:1,
      number: "1111111111",
      password: await bcrypt.hash("rahul", 10),
      name: "rahul",
      Balance: {
        create: {
          amount: 10000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 10000,
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const krish = await prisma.user.upsert({
    where: { number: "2222222222" },
    update: {},
    create: {
      id: 2,
      number: "2222222222",
      password: await bcrypt.hash("krish", 10),
      name: "krish",
      Balance: {
        create: {
          amount: 2000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "token__2",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ rahul, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
