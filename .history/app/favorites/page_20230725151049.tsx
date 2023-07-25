import getCurrentUser from "../actions/getCurrentUser"
import { getFavoriteListings } from "../actions/getFavoriteListings"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"

const FavoritesPage = async () => {
    const currentUser = await getCurrentUser()
    const favorites = await getFavoriteListings()

    if (!currentUser) {
        return(
            <ClientOnly>
                <EmptyState
                title="Not logged in"
                subtitle="Please login"
                />
            </ClientOnly>
        )
    }
}

export default FavoritesPage