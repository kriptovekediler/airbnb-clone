import getListings from "./actions/getListings";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

export default async function Home() {
  const listings = await getListings()
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
          {listings.map((listing: any) => {
            return(
              <div>
                {listing.imageSrc}
              </div>
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  )
}
