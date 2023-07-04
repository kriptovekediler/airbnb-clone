import React from 'react'

interface ButtonProps {
    disabled?: boolean
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    outline?: boolean
}

const Button = () => {
  return (
    <button></button>
  )
}

export default Button