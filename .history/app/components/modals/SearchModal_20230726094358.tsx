'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from './Modal'
import { useCallback, useMemo, useState } from 'react'
import { CountrySelectValue } from '../inputs/CountrySelect'
import { useRouter, useSearchParams } from 'next/navigation'
import { Range } from 'react-date-range'
import dynamic from 'next/dynamic'


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
      startDate: new Date(),
      endDate: new Date()
    })

    const Map = useMemo(() =>{
      dynamic(() => import('../Map'), {
        ssr: false
      })
    }, [location])

    const onBack = useCallback(() => {
      setStep((value) => value - 1)
    }, [])

    const onNext = useCallback(() => {
      setStep((value) => value + 1)
    }, [])

    const onSubmit = useCallback(async() => {
      if(step !== STEPS.INFO) {
        onNext()
      }
    }, [])

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