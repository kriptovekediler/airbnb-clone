'use client'

import { IconType } from "react-icons"

interface CategoryInputProps {
    icon: IconType
    label: string
    selected?: boolean
    onClick: (value: string) => void
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon:Icon,
    label,
    selected,
    onClick
}) => {
  return (
    <div
    onClick={() => onClick(label)}
    className="
    rounded-xl
    transition
    cursor-pointer
    border-2
    flex-col
    "
    >
        <Icon size={30}/>
        <div className="font-semibold">
            {label}
        </div>
    </div>
  )
}

export default CategoryInput
