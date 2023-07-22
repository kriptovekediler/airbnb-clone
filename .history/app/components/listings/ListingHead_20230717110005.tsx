'use client'

import { SafeUser } from "@/app/types";

interface ListingHeadProps {
    title: string;
    locationValue: string;
    currentUser?: SafeUser | null
    
}

const ListingHead = () => {
  return (
    <div>ListingHead</div>
  )
}

export default ListingHead