import Button from '@/components/Button'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='pt-20 pb-40 sm:pt-60 sm:pb-60'>
      <div className='flex flex-col sm:only:justify-center sm:items-center gap-9'>
        <p className='text-3xl sm:text-5xl capitalize text-customGray dark:text-gray-50 font-bold'>Get in touch.</p>
        <p className='sm:w-2/4 sm:text-center'>Hey there! If you have any questions or just want to say hi, feel free to drop me a message anytime. I would love to hear from you!</p>
      </div>
      <div className='flex sm:justify-center sm:items-center pt-5 sm:pt-10'>
        <Button label='SAY HELLO' />
      </div>
    </section>
  )
}

export default Contact