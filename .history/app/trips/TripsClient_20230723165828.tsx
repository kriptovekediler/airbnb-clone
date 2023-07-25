import React from 'react'
import { SafeReservation, SafeUser } from '../types'
import Container from '../components/Container'
import Heading from '../components/Heading'

interface TripsClientProps {
    reservation?: SafeReservation
    currentUser?: SafeUser | null
}

const TripsClient: React.FC<TripsClientProps> = ({
    reservation,
    currentUser
}) => {
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
          {reservation.map((reservation) =>(
            <ListingCard/>
          ))}  
        </div>
    </Container>
  )
}

export default TripsClient