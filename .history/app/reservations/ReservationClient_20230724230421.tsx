'use client'

import { SafeReservation, SafeUser } from "../types"

interface ReservationClientProps {
  reservation?: SafeReservation[]
  currentUser?: SafeUser | null
}

const ReservationClient:React.FC<ReservationClientProps> = ({
  reservation, currentUser
}) => {
  return (
    <div>
      ss
    </div>
  )
}

export default ReservationClient