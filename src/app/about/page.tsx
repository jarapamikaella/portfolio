import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='container mx-auto scroll-mt-40 sm:pt-20' id='about'>
      <div className='py-4'>
        <p className='text-3xl sm:text-5xl capitalize text-customGray font-bold'>ABOUT</p>
        <p className='py-6 text-md sm:text-lg'>
          Hi, I'm Mika-Ella Jarapa, a frontend developer with 2 years of experience in creating intuitive and engaging digital experiences.
          I specialize in HTML, CSS, JavaScript, and other web technologies, and always aim to put the user first when designing and coding.
          My passion for great user experiences drives my work, whether I'm building a website, web application, or mobile app. When I'm not coding,
          I enjoy working out and travelling, and am always seeking new challenges both personally and professionally.
          Thank you for taking the time to learn a little more about me - let's create something amazing together!
        </p>
      </div>
      <div className='py-8 flex flex-col gap-8'>
        <p className='text-3xl sm:text-5xl capitalize text-customGray font-bold'>TECHNOLOGIES</p>
        <div className='flex flex-wrap gap-8'>
          <img
            src={"/icons/html5.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
          <img
            src={"/icons/css3.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
          <img
            src={"/icons/javascript.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
          <img
            src={"/icons/react.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
          <img
            src={"/icons/tailwind.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
          <img
            src={"/icons/git.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
          <img
            src={"/icons/vscode.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
          <img
            src={"/icons/github.svg"}
            className='w-12 h-12 sm:w-20 sm:h-20'
            alt={"filter"}
          />
        </div>
      </div>
    </section>
  )
}

export default About