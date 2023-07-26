'use client'

import useSearchModal from '@/app/hooks/useSearchModal'
import Modal from './Modal'


enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2
}

const SearchModal = () => {
    const searchModal = useSearchModal()

    const []
  return (
    <Modal
    isOpen={searchModal.isOpen}
    onClose={searchModal.onClose}
    onSubmit={searchModal.onOpen}
    title='Filters'
    actionLabel='Search'
    />
  )
}

export default SearchModal