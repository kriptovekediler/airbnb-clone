'use client'

import React from 'react'


interface ModalInterfaceProps {
isOpen?: boolean;
disabled?:boolean;
onSubmit: () => void
onClose: () => void
actionLabel:string
secondaryAction?:() => void
title?:string
body?: React.ReactElement
footer?: React.ReactElement
secondaryLabel:string
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal