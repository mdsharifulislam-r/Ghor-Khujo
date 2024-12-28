import React from 'react'

export default function Title({title,subtitle}:{title:string,subtitle:string
}) {
  return (
    <div className='flex justify-center'>
        <div className='flex justify-center place-items-center flex-col gap-7 py-5'>
        <span data-aos="fade-up" className='md:text-base text-sm rounded-md px-3 py-1 bg-red-100  text-primary_color'>{subtitle}</span>
        <h1 data-aos="fade-up" data-aos-delay={500} className='md:text-5xl text-3xl font-bold text-text_color'>{title}</h1>
        </div>
      
    </div>
  )
}
