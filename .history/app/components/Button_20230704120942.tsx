import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    disabled?: boolean
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    outline?: boolean
    small?: boolean
    icon?: IconType
}

const Button = () => {
  return (
    <button></button>
  )
}

export default Button