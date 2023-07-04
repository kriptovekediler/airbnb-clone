'use client'

import React, { useEffect, useState } from 'react'


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
  return (
    <div></div>
  )
}

export default Modal