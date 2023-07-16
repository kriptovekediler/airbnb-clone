import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
}
