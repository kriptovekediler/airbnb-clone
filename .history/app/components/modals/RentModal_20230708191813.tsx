'use client'

import Modal from './Modal'
import useRentModal from '@/app/hooks/useRentModal'

const RentModal = () => {
    const rentModal = useRentModal()

    return (
        <Modal onClose={rentModal.onClose} isOpen={rentModal.isOpen} onSubmit={rentModal.onClose} title='Submit' actionLabel='Airbnb your home!' />
      )
}

export default RentModal