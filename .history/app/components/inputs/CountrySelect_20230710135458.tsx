'use client'

import useCountries from '@/app/hooks/useCountries'
import Select from 'react-select'

const CountrySelect = () => {
    const {getAll} = useCountries()
  return (
    <div>
         <Select
         value={getAll()}
         isClearable
         />
    </div>
  )
}

export default CountrySelect