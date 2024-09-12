import React from 'react'

type Data ={
  children?: React.ReactNode,
  className?: string
  id?: string
}

export const Section = ({children, className, id}:Data) => {
  return (
    <section id={id} className={`${className}`}>{children}</section>
  )
}


export const Container = ({children, className}:Data) => {
  return (
    <div className={`container ${className}`}>{children}</div>
  )
}
