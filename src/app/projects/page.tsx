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
          withLivePreview={false}
          codeLink='https://github.com/Diesta-Jarapa-Vega/Bicol-Dialect-Part-of-Speech-Tagger-BPOS'
        />
       <PhotoCard
          image="/images/holo.jpg"
          title='BUCEILS HS Online Voting System'
          desciption='BUCEILS HS Online Voting System for Student Election, '
          subdesription='Tech stack : HTML , JavaScript, CSS, PHP'
          codeLink='https://github.com/BSCS-3A/Monitoring'
          withLivePreview={false}
        />
        <PhotoCard
          image="/images/wavy.jpg"
          title='Spotify Clone'
          desciption='Redesigning and cloning Spotify in a modern way and connecting to Spotify Api'
          subdesription='Tech stack : Next.js, JavaScript, Typescript, Tailwind'
          livePreviewLink='https://spotify-clone-v3.vercel.app/'
          codeLink='https://github.com/jarapamikaella/spotify-clone'
        />
        <PhotoCard
          image="/images/holo.jpg"
          title='Kitchenswaps'
          desciption='A web-application promotes running food business through commercial kitchen sharing.'
          subdesription='Tech stack : React, HTML, JavaScript, Tailwind, Typscript'
        />
      </div>
    </section>
  )
}

export default Projects