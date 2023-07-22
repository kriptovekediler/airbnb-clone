import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById"
import { SafeListings } from "@/app/types"

interface IParams {
  listingId?: string
}

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser)
  return (
    <div></div>
  )
}

export default ListingPage