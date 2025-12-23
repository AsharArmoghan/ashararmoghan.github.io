import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";
import { prisma } from "@/app/lib/api/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("[Auth] Authorize called");

        if (!credentials?.email || !credentials?.password) {
          console.error("[Auth] Missing credentials");
          throw new Error("Invalid credentials");
        }

        console.log("[Auth] Looking up user:", credentials.email);

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user) {
          console.error("[Auth] User not found in database");
          throw new Error("User not found");
        }

        console.log("[Auth] User found, verifying password...");

        const isPasswordValid = await compare(
          credentials.password as string,
          user.password,
        );

        if (!isPasswordValid) {
          console.error("[Auth] Invalid password");
          throw new Error("Invalid password");
        }

        console.log("[Auth] Password verified, returning user");

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
});
