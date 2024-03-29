"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
// import { ThemeContext } from '../app/contexts/ThemeProvider';
import { useTheme } from "next-themes";

export const NavBar = () => {
  // let { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();

  return (
    <nav>
      <div className='px-5 sm:container sm:mx-auto py-4 flex items-center justify-between dark:text-white'>
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="MLogoGradient"
            className='w-12 h-12 sm:w-16 sm:h-16'
          />
        </Link>
        <div className='hidden sm:flex items-center gap-16'>
          <Link href={'#about'}>
            <li className='inline-block cursor-pointer'>About</li>
          </Link>
          <Link href={'#projects'}>
            <li className='inline-block cursor-pointer'>Project</li>
          </Link>
          <Link href={'#blogs'}>
            <li className='inline-block cursor-pointer'>Blog</li>
          </Link>
          <Image
            src={theme === 'light' ? "/icons/dark.svg" : "/icons/light.svg"}
            alt="LightModeIcon"
            width={20}
            height={20}
            onClick={() => {
              if(theme === 'light') {
                setTheme("dark")
                return;
              }
              setTheme("light");
            }}
            className='cursor-pointer'
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