'use client'

import Container from "../components/Container"
import Heading from "../components/Heading"
import { SafeReservation, SafeUser } from "../types"

interface ReservationClientProps {
  reservation?: SafeReservation[]
  currentUser?: SafeUser | null
}

const ReservationClient:React.FC<ReservationClientProps> = ({
  reservation, currentUser
}) => {
  return (
    <Container>
      <Heading
      title="Reservations"
      subtitle="Bookings on your properties"
      />
    </Container>
  )
}

export default ReservationClient