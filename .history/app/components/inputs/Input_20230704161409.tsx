'use client'

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface IconProps {
    id: string
    label: string
    type?:string
    disabled?: boolean
    formatPrice?: boolean
    register: UseFormRegister<FieldValues>
    required?: boolean
    errors: FieldErrors
}

const Input: React.FC<FieldErrors> = ({id, label, type='text', disabled, formatPrice, register, required, errors}) => {
  return (
    <div className='w-full relative'>
        {formatPrice && (
            <BiDollar
            size={24}
            className='
            text-neutral-700
            absolute
            top-5
            left-2'
            />
        )}
        <input
        id={id}
        label= {label}
        />
    </div>
  )
}

export default Input