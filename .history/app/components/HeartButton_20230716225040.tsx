'use client'

import { SafeUser } from "../types"

interface HeartButtonProps {
listingId: string
currentUser?: SafeUser | null
}

const HeartButton: React.FC <HeartButtonProps> = ({
    listingId, currentUser
}) => {
  return (
    <div>HeartButton</div>
  )
}

export default HeartButton