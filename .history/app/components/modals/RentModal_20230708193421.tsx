'use client'

import { useState } from 'react'
import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}

const RentModal = () => {
    const rentModal = useRentModal()
    const [step, setStep] = useState(STEPS.CATEGORY)

    const onBack = () => {
        setStep((value) => value - 1)
    }

    const onNext = () => {
        setStep((value) => value + 1)
    }

    return (
        <Modal onClose={rentModal.onClose} isOpen={rentModal.isOpen} onSubmit={rentModal.onClose} title='Airbnb your home' actionLabel='Submit!' />
      )
}

export default RentModal