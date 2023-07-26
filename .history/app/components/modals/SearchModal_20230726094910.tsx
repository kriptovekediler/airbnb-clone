'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from './Modal'

import { useCallback, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { CountrySelectValue } from '../inputs/CountrySelect'
import { Range } from 'react-date-range'

import qs from 'query-string'
import dynamic from 'next/dynamic'
import { formatISO } from 'date-fns'


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
    const [guestCount, setGuestCount] = useState(1)
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
        return onNext()
      }

      let currentQuery = {}

      if (params) {
        currentQuery = qs.parse(params.toString())
      }

      const updateQuery: any = {
        ...currentQuery,
        locationValue: location?.value,
        guestCount,
        roomCount,
        bathromCount
      }

      if(dateRange.startDate) {
        updateQuery.startDate = formatISO(dateRange.startDate)
      }

      if(dateRange.endDate) {
        updateQuery.endDate = formatISO(dateRange.endDate)
      }

      const url = qs.stringifyUrl({
        url: '/',
        query: updateQuery
      })
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