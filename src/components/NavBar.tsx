import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <nav>
      <div className='container mx-auto py-4 flex items-center justify-between'>
        <Link href="/">
          <Image
            src={"/icons/logo.svg"}
            alt="MLogoGradient"
            width={60}
            height={20}
          />
        </Link>
        <div className='flex items-center gap-16'>
          <Link href={'/about'}>
            <li className='inline-block'>About</li>
          </Link>
          <Link href={'/projects'}>
            <li className='inline-block'>Project</li>
          </Link>
          <Link href={'/blogs'}>
            <li className='inline-block'>Blog</li>
          </Link>
          <Image
            src={"/icons/light.svg"}
            alt="LightModeIcon"
            width={20}
            height={20}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar