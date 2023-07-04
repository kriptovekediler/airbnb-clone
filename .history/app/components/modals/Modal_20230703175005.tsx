'use client'

import React, { useCallback, useEffect, useState } from 'react'


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

const Modal: React.FC<ModalInterfaceProps> = ({title,isOpen,disabled,onSubmit,onClose,actionLabel,body, footer,secondaryLabel,secondaryAction}) => {

  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if(disabled) {
    return
  }
    setShowModal(false)
    setTimeout(() =>{
      onClose()
    },300)
  }, [onClose, disabled])

  const handleSubmit = useCallback(() => {
    if(disabled){
    return}
    
    onSubmit()
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    if(disabled || !secondaryAction) {
      return
    }
    secondaryAction()
    
  }, [disabled, secondaryAction])

  if(!isOpen) {
    return null
  }
  return (
    <div
    className='
    justify-center
    items-center
    flex
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-red-800/99
    '
    ></div>
  )
}

export default Modal