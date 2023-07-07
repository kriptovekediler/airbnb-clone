import Image from 'next/image'
import React from 'react'
import { SafeUser } from '../types'

interface AvatarProps{
  currentUser?: SafeUser | null
}
const Avatar:React.FC<AvatarProps> = ({currentUser}) => {
  return (
    <Image
    className='rounded-full'
    height='30'
    width='30'
    alt='Avatar'
    src='/images/placeholder.jpg'
    />
)
}

export default Avatar