import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
  }

  interface Session {
    user: User;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role: string;
    id: string;
  }
}
