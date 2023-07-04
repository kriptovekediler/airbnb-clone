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
    bg-neutral-800/70
    '
    >
      <div
      className='
      relative
      w-full
      md:w-4/6
      lg:w-3/6
      xl:w-2/5
      my-6
      mx-auto
      h-full
      lg:h-auto
      md:h-auto
      '
      >
        {/* CONTENT */}
        <div
        className={`
        translate
        duration-300
        h-full
        ${showModal? 'translate-y-0' : 'translate-y-full'}
        ${showModal? 'opacity-100' : 'opacity-0'}
        `}
        >
          <div
          className='
          translate
          h-full
          lg:h-auto
          md:h-auto
          border-0
          rounded-lg
          shadow-lg
          relative
          flex
          flex-col
          w-full
          bg-white
          outline-none
          focus:outline-none
          '
          >
            {/* Header */}
            <div
            className='flex
            items-center
            p-6
            
            justify-center
            relative
            '
            >
              <button
              className='p-1'
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal