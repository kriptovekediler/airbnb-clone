'use client'

import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

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
    <div
    className='w-full relative'
    ></div>
  )
}

export default Input