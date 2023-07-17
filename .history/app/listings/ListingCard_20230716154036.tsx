'use client'

import { Listing } from "@prisma/client"
import { SafeUser } from "../types"

interface ListingCardProps {
    data: Listing
    currentUser?: SafeUser | null
}

const ListingCard = () => {
  return (
    <div></div>
  )
}

export default ListingCard