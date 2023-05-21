import Image from 'next/image';
import React from 'react'

interface CardProps {
  date: string;
  title: string;
  desciption: string;
  image?: string;
  icons?: {
    iconName: string;
    icon: string;
  }[],
  rounded?: boolean;
  height?: number
}

export const Card = ({ date, title, desciption, image, icons, rounded = false, height }: CardProps) => {
  return (
    <div className={`bg-gradient-to-r from-violet-500 via-purple-400 to-blue-500 rounded-md ${height && 'h-80'} p-[1px]`}>
      <div className='flex flex-col gap-4 p-5 bg-white rounded-md'>
        <p className='text-sm'>{date}</p>
        <div>
          <p className='text-2xl font-bold'>{title}</p>
          <p className='text-base'>{desciption}</p>
        </div>
      </div>
    </div>
  )
}

export default Card