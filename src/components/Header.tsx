import React from 'react'
import Button from './Button'
import Image from 'next/image'

export const Header = () => {
  return (
    <>
      <div className='h-[calc(100vh-180px)] container mx-auto flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <p className='text-6xl font-black'>Hello, I’m Mika-Ella</p>
          <p className='text-xl text-center w-3/5'>A Frontend Developer based in the Philippines. Passionate with crafting digital experiences that captivate, inspire, and bring ideas to life.</p>
          <Button label='Get in Touch' />
        </div>
      </div>
      <div className='flex w-full container mx-auto items-center justify-between'>
        <div className='flex gap-4 cursor-pointer'>
          <p className='text-[#9E50ED]'>Discover More</p>
          <Image
            src={"/icons/arrow-down.svg"}
            alt="arrowDownIcon"
            width={16}
            height={16}
          />
        </div>
        <div className='flex gap-4'>
          <Image
            src={"/icons/github.svg"}
            alt="GithubLogo"
            width={20}
            height={20}
          />
          <Image
            src={"/icons/linkedIn.svg"}
            alt="GithubLogo"
            width={20}
            height={20}
          />
          <Image
            src={"/icons/instagram.svg"}
            alt="GithubLogo"
            width={18}
            height={18}
          />
        </div>
      </div>
    </>
  )
}

export default Header