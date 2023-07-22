'use client'

import { IconType } from "react-icons"

interface ListingCategoryProps{
    icon: IconType
    label:string
    description:string
}

const ListingCategory:React.FC<ListingCategoryProps> = ({icon:Icon,label,description}) => {

  return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center gap-4">
            <Icon size={40}/>
        </div>
    </div>
  )
}

export default ListingCategory