import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    disabled?: boolean
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    outline?: boolean
    small?: boolean
    icon?: IconType
}

const Button: React.FC<ButtonProps> = ({disabled, onClick, outline, small, icon}) => {
  return (
    <button
    
    className={`
    relative
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    w-full
    ${outline ? 'bg-white': 'bg-rose-500'}
    ${outline ? 'border-black': 'border-rose-500'}
    ${outline ? 'text-black': 'text-white'}
    ${small ? 'py-1' : 'py-3'}
    ${small ? 'text-sm' : 'text-md'}
    ${small ? 'font-light' : 'font-semibold'}
    ${small ? 'border-[1px]' : 'border-2'}
    `}>
        {label}
    </button>
  )
}

export default Button