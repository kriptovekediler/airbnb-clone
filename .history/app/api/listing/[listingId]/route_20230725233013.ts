import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'

interface IParams {
  listingId?: string;
}

export async function DELETE(request: Request{ params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  const { listingId } = params;

  if (!currentUser) {
    NextResponse.error();
  }

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const deletingId = await prisma.listing.delete({
    where: currentUser?.id
  })
}
