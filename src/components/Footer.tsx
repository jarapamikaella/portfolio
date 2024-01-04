"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTheme } from "next-themes";


export const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer>
      <div className='flex flex-col gap-3 sm:gap-6'>
        <div className='hidden sm:flex justify-between'>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={100}
              height={100}
              alt="MLogoGradient"
              className='w-12 h-12 sm:w-16 sm:h-16'
            />
          </Link>
          <div className='flex gap-4'>
            <Image
              src={theme === 'light' ? "/icons/github.svg" : "/icons/github-white.svg"}
              alt="GithubLogo"
              width={28}
              height={28}
            />
            <Image
              src={theme === 'light' ? "/icons/linkedIn.svg" : "/icons/linkedIn-white.svg"}
              alt="GithubLogo"
              width={28}
              height={28}
            />
            <Image
              src={theme === 'light' ? "/icons/instagram.svg" : "/icons/instagram-white.svg"}
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
          <p className='text-center text-sm'>© 2023  Mika-Ella Jarapa. All rights reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer