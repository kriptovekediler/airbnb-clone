'use client'

import React, { useEffect, useState } from 'react'

const ClientOnly = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
  return (
    <div>ClientOnly</div>
  )
}

export default ClientOnly