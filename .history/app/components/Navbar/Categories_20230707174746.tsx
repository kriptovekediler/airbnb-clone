'use client'

import React from 'react'

import {TbBeach} from 'react-icons/tb'
import {GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'

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
  )
}

export default Categories