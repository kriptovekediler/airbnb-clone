import getCurrentUser from "../actions/getCurrentUser"
import getListings from "../actions/getListings"
import getReservations from "../actions/getReservations"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"
import TripsClient from "./TripsClient"

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
        return(
            <ClientOnly>
                <EmptyState
                title='Unauthorized'
                subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getListings({userId: currentUser.id})

    if(reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                title="No trips found"
                subtitle="Looks like you havent reserved any trips"
                />
            </ClientOnly>
        )
    }

    return (
        <TripsClient
        reservation={reservations}
        currentUser={currentUser}
        />
    )
}

export default PropertiesPage