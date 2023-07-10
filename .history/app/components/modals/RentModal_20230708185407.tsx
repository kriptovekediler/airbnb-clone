'use client'

import React from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

const RentModal = () => {
    const rentModal = useRentModal()

  return (
    <Modal onClose={rentModal.onClose()} onSubmit={rentModal.onClose()} isOpen={rentModal.isOpen} />
  )
}

export default RentModal