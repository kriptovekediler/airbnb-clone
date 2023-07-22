'use client'

import { SafeListings, SafeUser } from "@/app/types"
import { Reservation } from "@prisma/client"

interface ListingClientProps{
    reservations: Reservation[]
    listing: SafeListings & {
        user: SafeUser
    }
    currentUser?: SafeUser | null
}

const ListingClient:React.FC<ListingClientProps> = ({
    listing, currentUser
}) => {
  return (
    <div>ListingClient</div>
  )
}

export default ListingClient