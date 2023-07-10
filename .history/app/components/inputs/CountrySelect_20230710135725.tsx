'use client'

import useCountries from '@/app/hooks/useCountries'
import Select from 'react-select'

export type CountrySelectTypes = {
    latLng:number[]
    region: string
    flag: string
    value: string
    label: string
}

interface CountrySelectProps {
    value: CountrySelectTypes,
    onChange: (value: CountrySelectTypes) => void
}

const CountrySelect = () => {
    const {getAll} = useCountries()
  return (
    <div>
         <Select
         options={getAll()}
         isClearable
         />
    </div>
  )
}

export default CountrySelect