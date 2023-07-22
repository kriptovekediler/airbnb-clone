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
    } | undefined
    locationValue: string
}

const ListingInfo:React.FC<ListingInfoProps> = ({user,description,guestCount,roomCount,bathroomCount,category,locationValue}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2"></div>
    </div>
  )
}

export default ListingInfo