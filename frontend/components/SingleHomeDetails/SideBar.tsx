import React from 'react'
import UserBox from './SideBar/UserBox'
import TopRelatedSearch from './SideBar/TopRelatedSearch'
import Booking from './SideBar/Booking'
import { HomeType } from '@/Types/Types'

export function SimpleTitle({text}:{text:string}){
  return  <h1 className='text-2xl font-bold pl-3 py-1 relative before:absolute before:h-full before:w-[2px] before:left-0 before:top-0 before:bg-primary_color text-teal-950'>{text}</h1>
}

export default function SideBar({home}:{home:HomeType}) {
  return (
    <div className='md:w-[30%] w-full'>
     <UserBox id={home?.user_id||0}/>
     <div className='p-4 mt-7 border'>
      <SimpleTitle text='Contact Info'/>
      <a href={`tel:${home?.phone}`} className=' py-5 block text-slate-600'>Phone: {home?.phone}</a>
     </div>
     <TopRelatedSearch tags={home?.tags}/>
     <Booking id={home?.user_id||0}/>
    </div>
  )
}
