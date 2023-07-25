import getCurrentUser from "./actions/getCurrentUser";
import getListings, {IListingParams} from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams: IListingParams
}
const Home = async ({searchParams}: HomeProps) => {
  const listings = await getListings()
  const currentUser = await getCurrentUser()
  const isEmpty = false

  if (isEmpty) {
    return(
      <ClientOnly>
        <EmptyState
        showReset
        />
      </ClientOnly>
    )
  }
  
  return (
    <ClientOnly>
      <Container>
        <div className="
        pt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        ">
          {listings.map((listing) => {
            return(
              <ListingCard
              data={listing}
              key = {listing.id}
              currentUser = {currentUser}
              />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  )
}
