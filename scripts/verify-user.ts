import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: "admin@portfolio.com" },
  });
  console.log("Admin user in DB:", user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
