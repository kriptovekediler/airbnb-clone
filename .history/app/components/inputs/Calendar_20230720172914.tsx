'use client'

import { Range, RangeKeyDict } from "react-date-range"

interface CalendarProps {
    value: Range
    disabledDates: Date[]
    onChange: (value:RangeKeyDict) => void
}

const Calendar:React.FC<CalendarProps> = ({
    value,
    disabledDates,
    onChange
}) => {
  return (
    <div>Calendar</div>
  )
}

export default Calendar