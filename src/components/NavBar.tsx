import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <nav>
      <div className='px-5 sm:container sm:mx-auto py-4 flex items-center justify-between'>
        <Link href="/">
          <img
            src={"/icons/logo.svg"}
            alt="MLogoGradient"
            className='w-12 h-12 sm:w-16 sm:h-16'
          />
        </Link>
        <div className='hidden sm:flex items-center gap-16'>
          <Link href={'#about'}>
            <li className='inline-block'>About</li>
          </Link>
          <Link href={'#projects'}>
            <li className='inline-block'>Project</li>
          </Link>
          <Link href={'#blogs'}>
            <li className='inline-block'>Blog</li>
          </Link>
          <Image
            src={"/icons/dark.svg"}
            alt="LightModeIcon"
            width={20}
            height={20}
          />
        </div>
        <div className='flex sm:hidden'>
          <Image
            src={"/icons/menu.svg"}
            alt="MenuIcon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar