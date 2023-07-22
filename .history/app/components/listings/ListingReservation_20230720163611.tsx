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
    <div className="
    bg-white
    rounded-xl
    border-[1px]
    border-neutral-200
    overflow-hidden
    ">

    </div>
  )
}

export default ListingReservation