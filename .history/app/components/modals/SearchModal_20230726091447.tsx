'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from './Modal'
import { useState } from 'react'
import { CountrySelectValue } from '../inputs/CountrySelect'
import { useRouter, useSearchParams } from 'next/navigation'


enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2
}

const SearchModal = () => {
    const searchModal = useSearchModal()
    const router = useRouter()
    const params = useSearchParams()

    const [location, setLocation] = useState<CountrySelectValue>()
    const [step, setStep] = useState(STEPS.LOCATION)
    const [bathromCount, setBathroomCount] = useState(1)
    const [bedroomCount, setBedroomCount] = useState(1)
    const [guessCount, setGuessCount] = useState(1)

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