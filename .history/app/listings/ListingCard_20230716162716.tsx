'use client'

import { Listing, Reservation } from "@prisma/client"
import { SafeUser } from "../types"
import { useRouter } from "next/navigation"
import useCountries from "../hooks/useCountries"
import { useCallback, useMemo } from "react"
import {format} from 'date-fns'

interface ListingCardProps {
    data: Listing
    currentUser?: SafeUser | null
    reservation?: Reservation
    actionId?: string
    actionLabel?: string
    onAction?: (value:string) => void
    disabled?: boolean
}

const ListingCard: React.FC<ListingCardProps> = ({
    data, currentUser, reservation, actionLabel, actionId = '',disabled, onAction
}) => {

    const router = useRouter()
    const  {getByValue} = useCountries()
    const location = getByValue(data.locationValue)

    const handleClose = useCallback(() => {
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()

            if(disabled) {
                return;
            }
            onAction?.(actionId)
        }
    }, [onAction, actionId, disabled])

    const price = useMemo(() => {
        if(reservation) {
            return reservation.totalPrice
        }
        return data.price
    }, [data.price, reservation])

    const reservationDate = useMemo(() => {
        if(!reservation) {
            return null
        }

        const start = new Date(reservation.startDate)
        const end  = new Date(reservation.endDate)

        return `${format(start, 'PP')} - ${format(end, 'PP')}`
    }, [reservation])

  return (
    <div 
    onClick={() => router.push(`/listings/${data.id}`)}
    className="col-span-1 cursor-pointer group">

    </div>
  )
}

export default ListingCard