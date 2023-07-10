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

const CountrySelect: React.FC<CountrySelectProps> = ({value, onChange}) => {
    const {getAll} = useCountries()
  return (
    <div>
         <Select
         placeholder='Anywhere'
         options={getAll()}
         isClearable
         value={value}
         onChange={(value) => onChange(value as CountrySelectTypes)}
         />
    </div>
  )
}

export default CountrySelect