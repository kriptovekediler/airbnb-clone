import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  listingId?: string;
}

export async function DELETE({ params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
}
