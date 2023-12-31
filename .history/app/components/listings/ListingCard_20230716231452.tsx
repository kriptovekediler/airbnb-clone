'use client'

import { Listing, Reservation } from "@prisma/client"
import { SafeUser } from "../../types"
import { useRouter } from "next/navigation"
import useCountries from "../../hooks/useCountries"
import { useCallback, useMemo } from "react"
import {format} from 'date-fns'
import Image from "next/image"
import HeartButton from "../HeartButton"

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
          className="col-span-1 cursor-pointer group"
        >
          <div className="flex flex-col gap-2 w-full">
            <div 
              className="
                aspect-square 
                w-full 
                relative 
                overflow-hidden 
                rounded-xl
              "
            >
              <Image
                fill
                className="
                  object-cover 
                  h-full 
                  w-full 
                  group-hover:scale-110 
                  transition
                "
                src={data.imageSrc}
                alt="Listing"
              />
              <div className="absolute top-3 right-3">
                <HeartButton
                listingId={data.id}
                currentUser={currentUser}
                />
              </div>
            </div>
            <div className="font-semibold text-lg">
                {location?.region}, {location?.label}
            </div>
            <div className="font-light text-neutral-500">
                {reservationDate || data.category}
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="font-semibold">
                    ${price}
                </div>
            </div>
          </div>
        </div>
       );
    }
     
    export default ListingCard;