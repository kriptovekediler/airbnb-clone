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

const Input = () => {
  return (
    <div></div>
  )
}

export default Input