import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  reservationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { reservationId } = params;

  const reservation = await prisma?.reservation.deleteMany({
    where: {
      id: reservationId,
    },
  });
}
