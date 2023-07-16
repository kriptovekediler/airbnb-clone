'use client'

import { useCallback } from "react"

interface CounterProps {
    title: string
    subtitle: string
    onChange: (value: number) => void
    value: number
}

const Counter: React.FC<CounterProps> = ({
    title, subtitle, onChange, value
}) => {
    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange, value])

    const onReduce = useCallback(() => {
        if (value === 1) {
            return null
        }

        onChange(value - 1)
    }, [onChange, value])
  return (
    <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
            <div className="font-medium">
                {title}
            </div>
            <div className="font-light text-gray-600">
                {subtitle}
            </div>
        </div>
        <div className="flex flex-row items-center gap-4">
            <div className="
            w-10
            h-10
            rounded-full
            border-[1px]
            border-neutral-400
            flex
            items-center
            justify-center
            text-neutral-600
            cursor-poi
            "></div>
        </div>
    </div>
  )
}

export default Counter