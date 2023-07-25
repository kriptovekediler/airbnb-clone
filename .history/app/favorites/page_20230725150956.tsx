import getCurrentUser from "../actions/getCurrentUser"
import { getFavoriteListings } from "../actions/getFavoriteListings"

const FavoritesPage = async () => {
    const currentUser = await getCurrentUser()
    const favorites = await getFavoriteListings()

}

export default FavoritesPage