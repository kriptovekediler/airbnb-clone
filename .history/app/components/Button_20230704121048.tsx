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
    <button>
        {label}
    </button>
  )
}

export default Button