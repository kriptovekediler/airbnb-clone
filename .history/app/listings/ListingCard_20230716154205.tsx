'use client'

import { Listing, Reservation } from "@prisma/client"
import { SafeUser } from "../types"

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
    data, currentUser, reservation, actionLabel, actionId
}) => {
  return (
    <div></div>
  )
}

export default ListingCard