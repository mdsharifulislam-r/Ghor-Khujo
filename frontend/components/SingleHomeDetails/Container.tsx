import React from 'react'
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Reviews from './Reviews';
import { HomeType } from '@/Types/Types';
export default function Container({home}:{home:HomeType}) {
 
  
  return (
    <div className='md:w-[70%] w-full'>
      <div className='flex md:gap-4 md:text-sm text-xs gap-2'>
        <span className='px-3 py-2 bg-primary_color text-white'>Featured</span>
        <span className='px-3 py-2 bg-yellow-400 text-white'>For Rent</span>
        <div className='flex place-items-center gap-2 '>
            <span className='text-primary_color'><FaRegCalendarDays/></span>
            <span className='text-slate-600'>{home?.publishDate}</span>
        </div>
        <div className='flex place-items-center gap-2 '>
            <span className='text-emerald-500'><FaRegComments/></span>
            <span className='text-slate-600'>36 comments</span>
            
        </div>
        
      </div>
      <h1 className='md:text-5xl text-3xl text-text_color font-bold my-5'>{home?.title}</h1>
      <div className='flex place-items-center gap-2 text-slate-500'>
        <span className='text-primary_color'><FaLocationDot/></span>
        <span>{home?.address}</span>
      </div>
      <div className='mt-20 min-h-96'>
        <h1 className='text-2xl font-bold pl-3 py-2 relative before:absolute before:h-full before:w-[2px] before:left-0 before:top-0 before:bg-primary_color text-teal-950'>Description</h1>
        <p className='my-4 text-lg text-slate-600  font-normal'>{home?.description}</p>
      </div>
      <Reviews house_id={home?.house_id||0}/>
    </div>
  )
}
