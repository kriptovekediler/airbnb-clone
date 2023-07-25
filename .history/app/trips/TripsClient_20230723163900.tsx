import React from 'react'
import { SafeReservation, SafeUser } from '../types'

interface TripsClientProps {
    reservation?: SafeReservation
    currentUser?: SafeUser | null
}

const TripsClient = () => {
  return (
    <div>My Trips</div>
  )
}

export default TripsClient