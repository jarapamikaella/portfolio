import React from 'react'

interface ButtonProps {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <div className='bg-gradient-to-r from-violet-500 via-purple-400 to-blue-500 rounded-md p-[1px]'>
      <button className='bg-black py-2 px-8 rounded-md'>
        {label}
      </button>
    </div>
  )
}

export default Button;