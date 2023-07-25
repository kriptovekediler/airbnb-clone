import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

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

  const 
}
