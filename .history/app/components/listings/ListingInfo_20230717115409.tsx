'use client'

import { SafeUser } from "@/app/types"
import { IconType } from "react-icons"

interface ListingInfoProps{
    user: SafeUser
    description: string
    guestCount: number
    roomCount: number
    bathroomCount: number
    category: {
        label: string
        icon: IconType
        description: string
    } | null
    locationValue: string
}

const ListingInfo:React.FC<ListingInfoProps> = ({user,description,guestCount,}) => {
  return (
    <div>ListingInfo</div>
  )
}

export default ListingInfo