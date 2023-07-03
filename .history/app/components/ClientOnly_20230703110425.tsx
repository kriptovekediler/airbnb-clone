'use client'

import React, { useState } from 'react'

const ClientOnly = () => {

    const [isMounted, setIsMounted] = useState(false)
  return (
    <div>ClientOnly</div>
  )
}

export default ClientOnly