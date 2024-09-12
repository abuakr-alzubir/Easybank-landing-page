import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <>
        <Image src='/images/logo.svg' alt='log' width={130} height={50} priority className='w-auto h-auto' />
    </>
  )
}

export default Logo