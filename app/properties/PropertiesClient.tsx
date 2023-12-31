'use client'

import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'


import { SafeListings, SafeReservation, SafeUser } from '../types'
import axios from 'axios'

import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/listings/ListingCard'
import { useRouter } from 'next/navigation'

interface PropertiesClientProps {
    listings?: SafeListings[]
    currentUser?: SafeUser | null
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser
}) => {
    const router = useRouter()
    const [deletingId, setDeletingId] = useState('')

    const onDelete = useCallback((id: string) => {
       setDeletingId(id)
       
       axios.delete(`/api/listing/${id}`)
       .then(() => {
        toast.success('Listing deleted')
        router.refresh()
       })
       .catch((error:any) => {
        toast.error(error?.response?.data?.error)
       })
       .finally(() => {
        setDeletingId('')
       })
    }, [router])
    
  return (
    <Container>
        <Heading
        title='Properties'
        subtitle='List of your properties'
        />
        <div className='
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
        '>
          {listings?.map((listing) =>(
            <ListingCard
            key={listing.id}
            data={listing}
            disabled={deletingId === listing.id}
            onAction={onDelete}
            currentUser={currentUser}
            actionId={listing.id}
            actionLabel='Delete property'
            />
          ))}  
        </div>
    </Container>
  )
}

export default PropertiesClient