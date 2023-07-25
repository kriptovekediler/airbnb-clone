import prisma from '@/app/libs/prismadb'

import getCurrentUser from "./getCurrentUser";

export async function getFavoriteListings() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return [];
  }

  const favoriteIds = await
}
