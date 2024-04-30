import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker"

const prisma = new PrismaClient();

async function main() {

  //Users
  for (let i = 0; i < 3; i++) {
    await prisma.user.create({
      data: {
        name: faker.person.firstName()
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