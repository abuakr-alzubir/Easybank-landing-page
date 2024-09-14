import Image from 'next/image'
import React from 'react'

const Logo = ({isFooter=false}: {isFooter?: boolean}) => {
  return (
    <>
        <Image src={`/images/logo${isFooter? '-footer': ''}.svg`} alt='log' width={130} height={50} priority className='w-auto h-auto' />
    </>
  )
}

export default Logo