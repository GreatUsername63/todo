import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient();

async function clearData() {
  try {
    await prisma.$executeRaw`SET foreign_key_checks = 0`;

    await prisma.user.deleteMany()
    await prisma.task.deleteMany()
    await prisma.log.deleteMany()

    await prisma.$executeRaw`SET foreign_key_checks = 1`;
    await prisma.$executeRaw`ALTER TABLE user AUTO_INCREMENT = 1`;

    console.log("All data deleted successfully");
  } catch (error) {
    console.log("Error deleting data: ", error);
  }
}

async function main() {
  await clearData();

  //Users
  for (let i = 0; i < 3; i++) {
    await prisma.user.create({
      data: {
        name: faker.person.firstName(),
        password: faker.internet.password()
      }
    })
  }

  //Tasks
  for (let i = 0; i < 5; i++) {
    await prisma.task.create({
      data: {
        name: faker.company.buzzPhrase(),
        description: faker.lorem.lines(1),
        dueDate: faker.date.future({ years: 0.2 }),
        userId: 1
      }
    })
  }

  //Logs
  for (let i = 0; i < 5; i++) {
    await prisma.log.create({
      data: {
        content: faker.lorem.lines(1),
        dateTime: faker.date.past(),
        userId: 1
      }
    })
  }

}

main()