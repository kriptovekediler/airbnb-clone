'use client'

import { Range } from "react-date-range"

interface ListingReservationProps {
    price: number
    totalPrice: number
    onChangeDate: (value: Range) => void
}

const ListingReservation = () => {
  return (
    <div>ListingReservation</div>
  )
}

export default ListingReservation