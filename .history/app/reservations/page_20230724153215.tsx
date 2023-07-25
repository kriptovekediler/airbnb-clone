import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import ClientOnly from "../components/ClientOnly"
import EmptyState from "../components/EmptyState"


const ReservationPage = async () => {
    const currentUser = await getCurrentUser()

    if(!currentUser) {
        return(
            <ClientOnly>
                <EmptyState
                title="Unauthorized"
                subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({authorId: currentUser.id})

    if (reservations.length === 0) {
        <ClientOnly>
            <EmptyState
            title="No reservation foond"
            subtitle="Looks like you have no reservations on your properties."
            />
        </ClientOnly>
    }
}