'use client'

import { SafeReservation, SafeUser } from "../types"

interface ReservationClientProps {
  reservation?: SafeReservation[]
  currentUser?: SafeUser | null
}

const ReservationClient = () => {
  return (
    <div>ReservationClient</div>
  )
}

export default ReservationClient