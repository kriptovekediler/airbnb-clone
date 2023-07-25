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
    <div></div>
  )
}

export default ReservationClient