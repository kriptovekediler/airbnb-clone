'use client'

import React from 'react'

interface MenuItemProps {
onClick: () => void
label: string
}

const MenuItem: React.FC<MenuItemProps> = (props:MenuItemProps) => {
  return (
    <div>MenuItem</div>
  )
}

export default MenuItem