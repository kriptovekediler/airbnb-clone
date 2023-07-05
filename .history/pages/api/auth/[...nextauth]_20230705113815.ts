import { AuthOptions } from "next-auth";

import prisma from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
};
