'use client'

import React from 'react'

import {TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {GiBoatFishing, GiIsland, GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'
import Container from '../Container'

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    }
]

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get('category')

    const pathname = usePathname()

    const isMainPage = pathname === '/'

    if(!isMainPage) {
        return null
    }

  return (
      <Container>
      <div className='
      pt-4
      flex
      flext-row
      items-center
      justify-between
      overflow-x-auto
      '>
        {categories.map((item) =>(
            <CategoryBox label= {item.label} selected={category == item.label} icon={item.icon}/>
            ))}
    </div>
    </Container>
  )
}

export default Categories