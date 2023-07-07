'use client'
import React from 'react'
import { IconType } from 'react-icons'

interface CategoryBoxProps {
    label: string
    icon: IconType
    selected: boolean
}

const CategoryBox:React.FC<CategoryBoxProps> = ({
    icon:Icon,
    label,
    selected
}) => {
  return (
    <div className='
    flex
    flex-col
    '>
        <Icon size={26}/>
        <div className='font-medium text-sm'>
            {label}
        </div>
    </div>
  )
}

export default CategoryBox