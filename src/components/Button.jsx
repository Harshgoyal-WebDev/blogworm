import React from 'react'

function Button({
    children,
    textColor='text-white',
    type='button',
    bgColor ='bg-blue-800',
    className ='',
    

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`}>
   {children}
    </button>
  )
}

export default Button
