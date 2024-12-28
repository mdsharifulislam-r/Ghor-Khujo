import HomeCard from '@/components/Common/HomeCard/HomeCard'
import { SimpleTitle } from '@/components/SingleHomeDetails/SideBar'
import { getHomeByUserId } from '@/lib/helper/getHomesUsingUserId'
import { HomeType } from '@/Types/Types'
import React from 'react'
import MiniHomeCard from './MiniHomeCarc'

export default async function MainContainer() {
    const data:HomeType[] = await getHomeByUserId()
    const homeShow = data?.map((item,index)=>(
      <MiniHomeCard home={item} key={item?.house_id}/>
    ))
  return (
    <div>
      <SimpleTitle
      text='My Homes'
      />
      <div className='mt-5 flex flex-col gap-2'>
        {homeShow}
      </div>
    </div>
  )
}
