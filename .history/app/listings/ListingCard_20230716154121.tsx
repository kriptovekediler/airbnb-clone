'use client'

import { Listing, Reservation } from "@prisma/client"
import { SafeUser } from "../types"

interface ListingCardProps {
    data: Listing
    currentUser?: SafeUser | null
    reservation?: Reservation
    actionId?: string
    actionLabel: string
    onAction?: (value:string) => void
}

const ListingCard = () => {
  return (
    <div></div>
  )
}

export default ListingCard