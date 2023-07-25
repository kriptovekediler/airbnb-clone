import { SafeReservation, SafeUser } from '../types'

import Container from '../components/Container'
import Heading from '../components/Heading'
import ListingCard from '../components/listings/ListingCard'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

interface TripsClientProps {
    reservation?: SafeReservation[]
    currentUser?: SafeUser | null
}

const TripsClient: React.FC<TripsClientProps> = ({
    reservation,
    currentUser
}) => {
    const router = useRouter()
    const [deletingId, setDeletingId] = useState('')

    const onDelete = useCallback((id: string) => {
       setDeletingId(id)
       
       axios.delete(`/api/reservations/${id}`)
       .then(() => {
        toast.success('Reservation cancelled')
       })
       .catch((error:any) => {
        toast.error(error?.response?.data?.error)
       })
       .finally(() => {
        setDeletingId('')
       })
    }, [])
    
  return (
    <Container>
        <Heading
        title='Trips'
        subtitle='Where you have been and where you are going'
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
          {reservation?.map((reservation) =>(
            <ListingCard
            key={reservation.id}
            data={reservation.Listing}
            disabled={deletingId === reservation.id}
            reservation={reservation}
            onAction={onDelete}
            currentUser={currentUser}
            />
          ))}  
        </div>
    </Container>
  )
}

export default TripsClient