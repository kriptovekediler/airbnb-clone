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
}) => {
  return (
    <div>CategoryBox</div>
  )
}

export default CategoryBox