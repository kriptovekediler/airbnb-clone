'use client'

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

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
    const location = getByValue(locationValue)

    return (
    <>
    <Heading
    title={title}
    subtitle={`${location?.region}, ${location?.label}`}
    />
    <div className="
    w-full
    h-[60vh]
    overflow-hidden
    rounded-xl
    relative
    ">
        <Image
        src={imageSrc}
        alt="Image"
        fill
        className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
            <HeartButton
            listingId={id}
            currentUser={currentUser}
            />
        </div>
    </div>
    </>
  )
}

export default ListingHead