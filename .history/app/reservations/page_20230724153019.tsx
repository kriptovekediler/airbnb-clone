import getCurrentUser from "../actions/getCurrentUser"
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
}