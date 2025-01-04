'use client'
import HomeCard from '@/components/Common/HomeCard/HomeCard'
import { useAppSelector } from '@/lib/hooks/hooks'
import React from 'react'

export default function MainContainer() {
    const homes = useAppSelector(state=>state.userReducer.favarite)
    const showHouse = homes?.length?homes.map(item=>(
        <HomeCard home={item} key={item.house_id}/>
    )):[]
  return (
    <div className='mt-3 flex flex-col gap-3'>
      {showHouse}
    </div>
  )
}
