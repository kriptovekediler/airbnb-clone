import getCurrentUser from "../actions/getCurrentUser"

const FavoritesPage = async () => {
    const currentUser = await getCurrentUser()
}

export default FavoritesPage