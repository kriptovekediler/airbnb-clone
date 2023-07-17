import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  listingId?: string;
}

export async function POST({ params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.push(listingId);

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE({ params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds.filter((id) => id !== listingId);
}
