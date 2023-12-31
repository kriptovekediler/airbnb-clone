'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from './Modal'

import { useCallback, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import CountrySelect, { CountrySelectValue } from '../inputs/CountrySelect'
import { Range } from 'react-date-range'

import qs from 'query-string'
import dynamic from 'next/dynamic'
import { formatISO } from 'date-fns'
import Heading from '../Heading'


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
      }, {skipNull: true})

      setStep(STEPS.LOCATION)
      searchModal.onClose()

      router.push(url)
     }, [
      step,
      location,
      searchModal,
      router,
      guestCount,
      roomCount,
      dateRange,
      onNext,
      bathromCount,
      params
     ])

     const actionLabel = useMemo(() => {
      if(step === STEPS.INFO) {
        return 'Search'
      }

      return 'Next'
     }, [])

     const secondaryActionLabel = useMemo(() => {
      if(step === STEPS.LOCATION) {
        return undefined
      }

      return 'Back'
     }, [])

     let bodyContent = (
      <div className='flex flex-col gap-8'>
        <Heading
        title='Where do you wanna go?'
        subtitle='Find the perfect location'
        />
        <CountrySelect
        value={location}
        onChange={(value) => setLocation(value as CountrySelectValue)}
        />
        <hr/>
        <Map
        center={location?.latlng}
        />
      </div>
     )

  return (
    <Modal
    isOpen={searchModal.isOpen}
    onClose={searchModal.onClose}
    onSubmit={onSubmit}
    title='Filters'
    actionLabel={actionLabel}
    secondaryAction={onBack}
    secondaryActionLabel={secondaryActionLabel}
    body={bodyContent}
    />
  )
}

export default SearchModal