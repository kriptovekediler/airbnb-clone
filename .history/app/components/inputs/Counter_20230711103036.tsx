'use client'

interface CounterProps {
    title: string
    subtitle: string
    onChange: (value: number) => void
    value: number
}

const Counter: React.FC<CounterProps> = ({
    title, subtitle, onChange, value
}) => {

  return (
    <div>

    </div>
  )
}

export default Counter