import getCurrentUser from "./getCurrentUser";

export async function getFavoriteListings() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return [];
  }
}
