'use client'
import React, { useEffect, useState } from 'react'
import HomeCard from '../Common/HomeCard/HomeCard'
import { HomeType } from '@/Types/Types'
import { searchParams } from '@/app/(pages)/homes/page'

export default function Container({search}:{search?:searchParams}) {
  
  const [homes,setHomes]=useState<HomeType[]>([])

  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/house?search=${search?.search||""}&address=${search?.address||""}&for=${search?.for||""}&type=${search?.type||""}&rent=${search?.rent||0}`)
    .then(res=>res.json())
    .then(data=>setHomes(data))
  },[search])

  const homesItem = homes?.map(item=>(
    <HomeCard
    
    home={item}
    key={item?.house_id}
    />
  ))
  
  return (
    <div className='w-full flex flex-col gap-4 mt-3'>
      
     {homesItem}

    </div>
  )
}
