'use client'

import { Range } from "react-date-range"

interface ListingReservationProps {
    price: number
    dateRange: Range
    totalPrice: number
    onChangeDate: (value: Range) => void
    disabled?:boolean
    disabledDates: Date[]
    onSubmit: () => void
}

const ListingReservation: React.FC<ListingReservationProps> = ({
    price, dateRange, totalPrice, onChangeDate,
    disabled,
    disabledDates,
    onSubmit
}) => {
  return (
    <div>ListingReservation</div>
  )
}

export default ListingReservation