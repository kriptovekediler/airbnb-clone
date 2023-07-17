'use client'

import { Listing, Reservation } from "@prisma/client"
import { SafeUser } from "../types"
import { useRouter } from "next/navigation"
import useCountries from "../hooks/useCountries"

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
    data, currentUser, reservation, actionLabel, actionId,disabled, onAction
}) => {

    const router = useRouter()
    const  {getByValue} = useCountries()
    const location = getByValue(data.locationValue)
  return (
    <div></div>
  )
}

export default ListingCard