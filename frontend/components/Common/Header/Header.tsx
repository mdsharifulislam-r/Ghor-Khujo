import React from 'react'

export default function Header() {
  return (
    <div className='w-full  bg-dark_color md:pl-0 pl-10'>
      <div className="container h-72 mx-auto flex flex-col justify-center ">
        <h1 className='md:text-5xl text-3xl text-text_color font-bold'>Home Lists</h1>
        <div className='text-slate-700 mt-2'><span>Home</span>{">"} <span className='text-primary_color'>Home Lists</span></div>
      </div>
    </div>
  )
}
