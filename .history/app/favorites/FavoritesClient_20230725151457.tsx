'use client'

import { SafeListings, SafeUser } from "../types"

interface FavoritesClientProps {
    listings: SafeListings[]
    currentUser: SafeUser | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings, currentUser
}) => {
  return (
    <div></div>
  )
}

export default FavoritesClient