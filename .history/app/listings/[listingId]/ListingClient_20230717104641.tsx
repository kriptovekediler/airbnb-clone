'use client'

import { SafeListings, SafeUser } from "@/app/types"

interface ListingClientProps{
    listing: SafeListings & {
        user: SafeUser
    }
}

const ListingClient = () => {
  return (
    <div>ListingClient</div>
  )
}

export default ListingClient