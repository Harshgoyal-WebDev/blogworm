import React from 'react'

function Button({
    children,
    textColor='text-white',
    type='button',
    bgcolor ='bg-blue-800',
    className ='',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${textColor}${bgcolor}${className}`}{...props}>
   {children}
    </button>
  )
}

export default Button
