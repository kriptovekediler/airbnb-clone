import getListingById from "@/app/actions/getListingById"
import { SafeListings } from "@/app/types"

interface IParams {
  listingId?: SafeListings
}

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingById({listingId});
  return (
    <div></div>
  )
}

export default ListingPage