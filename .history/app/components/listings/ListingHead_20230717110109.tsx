'use client'

import useCountries from "@/app/hooks/useCountries";
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
    const {getByValue} = useCountries()
  return (
    <div>ListingHead</div>
  )
}

export default ListingHead