import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  authorId?: string;
  userId?: string;
}

export async function getReservations(params: IParams) {
  const { listingId, authorId, userId } = params;

  let query: any = {};

  if (listingId) {
    query.listingId = listingId;
  }
}
