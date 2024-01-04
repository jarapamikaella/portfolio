import Card from '@/components/Card'
import PhotoCard from '@/components/PhotoCard'
import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='container mx-auto scroll-mt-32 pt-5 sm:pt-20'>
      <p className='text-3xl sm:text-4xl capitalize text-customGray dark:text-gray-50 font-bold'>PROJECTS</p>
      <div className='flex flex-col sm:grid sm:grid-cols-4 w-full gap-5 py-10'>
        <PhotoCard
          image="/images/background.jpeg"
          title='BPOS: Bicol Part-of-Speech Tagger'
          desciption='BPOS: A part-of-speech tagger tool using conditional random field for bicol dialect.'
          subdesription='Tech stack : Python'
        />
       <PhotoCard
          image="/images/holo.jpg"
          title='BUCEILS HS Online Voting System'
          desciption='BUCEILS HS Online Voting System for Student Election, '
          subdesription='Tech stack : HTML , JavaScript, CSS, PHP'
        />
        <PhotoCard
          image="/images/wavy.jpg"
          title='Spotify Clone'
          desciption='A case study of redesigning and cloning Spotify in a modern way and connecting to Spotify Api'
          subdesription='Tech stack : Next.js, JavaScript, Typescript, Tailwind'
        />
        <PhotoCard
          image="/images/holo.jpg"
          title='Kitchenswaps'
          desciption='A web-application based in Denmark, which promotes running food business through commercial kitchen sharing.'
          subdesription='Tech stack : React, HTML, JavaScript, Tailwind, Typscript'
        />
      </div>
    </section>
  )
}

export default Projects