'use client'

import { CldUploadWidget } from "next-cloudinary"

declare global {
    var cloudinary : any
}

interface ImageUploadProps {
    onChange: (value: string) => void
    value: string
}

const ImageUpload = () => {
  return (
    <div></div>
  )
}

export default ImageUpload