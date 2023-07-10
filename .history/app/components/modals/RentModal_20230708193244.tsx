'use client'

import { useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4

}

const RentModal = () => {
    const rentModal = useRentModal()
    const [step, setStep] = useState()

    return (
        <Modal onClose={rentModal.onClose} isOpen={rentModal.isOpen} onSubmit={rentModal.onClose} title='Airbnb your home' actionLabel='Submit!' />
      )
}

export default RentModal