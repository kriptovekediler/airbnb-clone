import getCurrentUser from "../actions/getCurrentUser"
import { getFavoriteListings } from "../actions/getFavoriteListings"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"
import FavoritesClient from "./FavoritesClient"

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

    if(favorites.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                title="No favorite"
                subtitle="You have not favorited any place so far"
                />
            </ClientOnly>
        )
    }

    return(
        <FavoritesClient
        listings = {favorites}
        currentUser = {currentUser}
        />
    )
}

export default FavoritesPage