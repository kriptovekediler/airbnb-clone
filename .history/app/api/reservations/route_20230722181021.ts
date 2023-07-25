import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }
  const body = await request.json();

  const { listingId, startDate, endDate, totalPrice } = body;

  const listingAndReservations = await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          id: listingId,
          startDate: startDate,
          endDate: endDate,
          totalPrice: totalPrice,
        },
      },
    },
  });

  return NextResponse.json(listingAndReservations);
}
