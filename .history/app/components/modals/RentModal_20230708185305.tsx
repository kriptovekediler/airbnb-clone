'use client'

import React from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

const RentModal = () => {
    const rentModal = useRentModal()
  return (
    <Modal />
  )
}

export default RentModal