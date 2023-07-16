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

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url)
    }, [onChange])
  return (
    <div></div>
  )
}

export default ImageUpload