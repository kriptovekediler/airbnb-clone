'use client'

import { CldUploadWidget } from "next-cloudinary"
import { useCallback } from "react"

declare global {
    var cloudinary : any
}

interface ImageUploadProps {
    onChange: (value: string) => void
    value: string
}

const ImageUpload: React.FC<ImageUploadProps> = ({onChange, value}) => {

    const handleUpload = useCallback(() => {
        onChange(result.info.secure_url)
    }, [])
  return (
    <div></div>
  )
}

export default ImageUpload