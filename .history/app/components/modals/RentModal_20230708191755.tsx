'use client'

import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

const RentModal = () => {
    const rentModal = useRentModal()

    return (
        <Modal onClose={rentModal.onClose} isOpen={registerModal.isOpen} onSubmit={handleSubmit(onSubmit)} title='Submit' actionLabel='Airbnb your home!' />
      )
}

export default RentModal