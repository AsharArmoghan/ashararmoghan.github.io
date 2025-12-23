import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function checkEnv() {
  console.log("--- Environment Check ---");
  const required = ["AUTH_SECRET", "NEXTAUTH_URL", "DATABASE_URL"];
  required.forEach((key) => {
    if (process.env[key]) {
      console.log(`✅ ${key} is set`);
    } else {
      console.error(`❌ ${key} is MISSING`);
    }
  });

  if (process.env.AUTH_SECRET) {
    console.log(`AUTH_SECRET length: ${process.env.AUTH_SECRET.length}`);
  }

  console.log("\n--- User Check ---");
  try {
    const userCount = await prisma.user.count();
    console.log(`Total users in DB: ${userCount}`);

    const users = await prisma.user.findMany({
      select: { email: true, role: true },
    });
    console.log("Users:", users);
  } catch (error) {
    console.error("Failed to connect to DB:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkEnv();
