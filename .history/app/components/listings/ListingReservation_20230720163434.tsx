'use client'

import { Range } from "react-date-range"

interface ListingReservationProps {
    price: number
    dateRange: Range
    totalPrice: number
    onChangeDate: (value: Range) => void
    disabled?:boolean
    disabledDates: Date[] 
}

const ListingReservation = () => {
  return (
    <div>ListingReservation</div>
  )
}

export default ListingReservation