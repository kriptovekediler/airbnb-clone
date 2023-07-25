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
      <div className='
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        '>

      </div>
    </Container>
  )
}

export default ReservationClient