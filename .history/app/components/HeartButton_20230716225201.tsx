'use client'

import { SafeUser } from "../types"

interface HeartButtonProps {
listingId: string
currentUser?: SafeUser | null
}

const HeartButton: React.FC <HeartButtonProps> = ({
    listingId, currentUser
}) => {

    const hasFavorited = false
    const toggleFavorite = () => {}
  return (
    <div
    onClick={toggleFavorite}
    className="relative hover:opacity-80 transition cursor-pointer"
    >

    </div>
  )
}

export default HeartButton