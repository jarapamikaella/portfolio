"use client";
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section>
      <div className='pt-28 pb-20 sm:h-[calc(100vh-180px)] sm:pt-0 sm:pb-0 sm:container sm:mx-auto flex flex-col sm:items-center justify-center'>
        <div className='flex flex-col gap-8 sm:items-center justify-center'>
          <p className='hidden sm:flex text-4xl md:text-6xl font-black flex-wrap text-center'>Hello, I’m Mika-Ella</p>
          <div className='flex flex-col sm:hidden'>
            <p className='text-4xl md:text-6xl font-black flex-wrap sm:text-center'>Hello,</p>
            <p className='text-4xl md:text-6xl font-black flex-wrap sm:text-center'>I’m Mika-Ella</p>
          </div>
          <p className='text-md md:text-xl sm:text-center sm:w-3/5'>
            A Frontend Developer based in the Philippines. Passionate with crafting digital experiences that captivate, inspire, and bring ideas to life.
          </p>
          <div className='flex'>
            <Link href={'#contact'}>
              <Button label='Get in Touch' />
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden sm:flex w-full container mx-auto items-center justify-between'>
        <Link href={'#about'}>
          <div className='flex gap-4 cursor-pointer'>
            <p className='text-[#9E50ED]'>Discover More</p>
            <Image
              src={"/icons/arrow-down.svg"}
              alt="arrowDownIcon"
              width={16}
              height={16}
            />
          </div>
        </Link>
        <div className='flex gap-4 align-middle items-center'>
          <Image
            src={theme === 'light' ? "/icons/github.svg" : "/icons/github-white.svg"}
            alt="GithubLogo"
            width={32}
            height={32}
          />
          <Image
            src={theme === 'light' ? "/icons/linkedIn.svg" : "/icons/linkedIn-white.svg"}
            alt="GithubLogo"
            width={32}
            height={32}
          />
          <Image
            src={theme === 'light' ? "/icons/instagram.svg" : "/icons/instagram-white.svg"}
            alt="GithubLogo"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
  )
}

export default Header