'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from './Modal'
import { useState } from 'react'
import { CountrySelectValue } from '../inputs/CountrySelect'
import { useRouter, useSearchParams } from 'next/navigation'
import { Range } from 'react-date-range'


enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2
}

const SearchModal = () => {
    const searchModal = useSearchModal()
    const router = useRouter()
    const params = useSearchParams()

    const [step, setStep] = useState(STEPS.LOCATION)

    const [location, setLocation] = useState<CountrySelectValue>()
    const [bathromCount, setBathroomCount] = useState(1)
    const [roomCount, setRoomCount] = useState(1)
    const [guessCount, setGuessCount] = useState(1)
    const [dateRange, setDateRange] = useState<Range>({
      startDate: new Date()
    })

  return (
    <Modal
    isOpen={searchModal.isOpen}
    onClose={searchModal.onClose}
    onSubmit={searchModal.onOpen}
    title='Filters'
    actionLabel='Search'
    />
  )
}

export default SearchModal