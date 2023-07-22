'use client'

import { SafeUser } from "@/app/types";

interface ListingHeadProps {
    title: string;
    locationValue: string;
    currentUser?: SafeUser | null
    id: string
    imageSrc: string
}

const ListingHead:React.FC<ListingHeadProps> = ({
    title, locationValue, currentUser, id, imageSrc
}) => {
  return (
    <div>ListingHead</div>
  )
}

export default ListingHead