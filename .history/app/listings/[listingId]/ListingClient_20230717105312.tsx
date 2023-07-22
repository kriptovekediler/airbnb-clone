'use client'

import Container from "@/app/components/Container"
import { categories } from "@/app/components/Navbar/Categories"
import { SafeListings, SafeUser } from "@/app/types"
import { Reservation } from "@prisma/client"
import { useMemo } from "react"

interface ListingClientProps{
    reservations?: Reservation[]
    listing: SafeListings & {
        user: SafeUser
    }
    currentUser?: SafeUser | null
}

const ListingClient:React.FC<ListingClientProps> = ({
    listing, currentUser
}) => {

    const category = useMemo(() => {
        return categories.find((item) =>
        
        item.label === listing.category)
    }, [listing.category])

  return (
    <Container>
        <div className="max-w-screen-lg mx-auto"></div>
    </Container>
  )
}

export default ListingClient