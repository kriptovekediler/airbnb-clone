'use client'

import React from 'react'


interface ModalInterfaceProps {
isOpen: boolean;
disabled:boolean;
onSubmit: () => void
onClose: () => void
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal