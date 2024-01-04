import Card from '@/components/Card'
import React from 'react'

const Blogs = () => {
  return (
    <section id='blogs' className='container mx-auto scroll-mt-40 h-full pt-10 sm:pt-20'>
      <div className='py-5'>
        <p className='text-3xl sm:text-4xl capitalize text-customGray dark:text-gray-50 font-bold'>BLOG POSTS</p>
      </div>
      <div className='flex pt-6 pb-14'>
        <Card
          date='May 25, 2023'
          title='Next.js 13'
          desciption='A complete guide on how to get started with Next.js 13 in 2023.'
        />
      </div>
    </section>
  )
}

export default Blogs