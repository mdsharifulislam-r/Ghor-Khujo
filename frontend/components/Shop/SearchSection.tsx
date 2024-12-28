'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function SearchSection() {
  
  const router = useRouter()

  
  return (
    <div className='w-full flex  bg-white'>
      <input onChange={(e)=>{
        router.push(`/homes?search=${e.target.value}`)
      }} type="text" className='w-[90%] py-4 px-3 text-sm border focus:outline-none' placeholder='Search Home Here' />
      <button className='px-4 py-2 bg-primary_color text-white'>Search</button>
    </div>
  )
}
