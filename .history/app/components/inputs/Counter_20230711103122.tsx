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
  return (
    <div>

    </div>
  )
}

export default Counter