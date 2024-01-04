import React from 'react'

interface ButtonProps {
  label: string
  onPress?: () => void;
}

export const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <div className='bg-gradient-to-r from-violet-500 via-purple-400 to-blue-500 rounded-md p-[1px]'>
      <button className='bg-white dark:bg-transparent py-2 px-8 rounded-md' onClick={onPress}>
        {label}
      </button>
    </div>
  )
}

export default Button;