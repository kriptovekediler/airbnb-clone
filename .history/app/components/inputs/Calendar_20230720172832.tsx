'use client'

import { Range } from "react-date-range"

interface CalendarProps {
    value: Range
    disabledDates: Date[]
    onChange: (value:Range) => void
}

const Calendar = () => {
  return (
    <div>Calendar</div>
  )
}

export default Calendar