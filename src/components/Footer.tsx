import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col gap-3 sm:gap-6'>
        <div className='hidden sm:flex justify-between'>
          <Link href="/">
            <img
              src={"/icons/logo.svg"}
              alt="MLogoGradient"
              className='w-12 h-12 sm:w-16 sm:h-16'
            />
          </Link>
          <div className='flex gap-4'>
            <Image
              src={"/icons/github.svg"}
              alt="GithubLogo"
              width={28}
              height={28}
            />
            <Image
              src={"/icons/linkedIn.svg"}
              alt="GithubLogo"
              width={28}
              height={28}
            />
            <Image
              src={"/icons/instagram.svg"}
              alt="GithubLogo"
              width={28}
              height={28}
            />
          </div>
        </div>
        <div className='border border-customGray hidden sm:flex'></div>
        <div className='flex flex-col sm:flex-row justify-between gap-4 sm:gap-0'>
          <div className='flex items-center gap-16'>
            <Link href={'#about'}>
              <li className='inline-block'>About</li>
            </Link>
            <Link href={'#projects'}>
              <li className='inline-block'>Project</li>
            </Link>
            <Link href={'#blogs'}>
              <li className='inline-block'>Blog</li>
            </Link>
          </div>
          <p className='text-center'>© 2023  Mika-Ella Jarapa. All rights reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer