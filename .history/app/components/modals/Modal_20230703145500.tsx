'use client'

import React from 'react'


interface ModalInterfaceProps {
isOpen: boolean;
disabled:boolean;
onSubmit: () => void
onClose: () => void
primaryAction: string
secondaryAction:string
title:string
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal