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
    
    setShowModal(true)
    
  }, [onSubmit])
  return (
    <div></div>
  )
}

export default Modal