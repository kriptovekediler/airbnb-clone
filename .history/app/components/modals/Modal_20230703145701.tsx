'use client'

import React from 'react'


interface ModalInterfaceProps {
isOpen?: boolean;
disabled?:boolean;
onSubmit: () => void
onClose: () => void
actionLabel:string
secondaryAction?:string
title?:string
body?: React.ReactElement
footer?: React.ReactElement
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal