'use client'

import useCountries from '@/app/hooks/useCountries'
import Select from 'react-select'

const CountrySelect = () => {
    const {getAll} = useCountries()
  return (
    <div>
         <Select
         options={getAll()}
         isClearable
         value={value}
         />
    </div>
  )
}

export default CountrySelect