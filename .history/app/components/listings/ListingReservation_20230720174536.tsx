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
        <div className="
        flex flex-row items-center gap-1 p-4
        ">
            <div className="text-2xl font-semibold">
                ${price}
            </div>
            <div className="font-light text-neutral-600">
                night
            </div>
        </div>
        <hr/>
        <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChangeDate={(value) => onChangeDate(value.selection)}
        />
    </div>
  )
}

export default ListingReservation