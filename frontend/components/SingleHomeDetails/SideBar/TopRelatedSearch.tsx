import React from 'react'
import { SimpleTitle } from '../SideBar'
import Image from 'next/image'
import { HomeType } from '@/Types/Types'
import Link from 'next/link'

function Card({house}:{house:HomeType}){
    return(
        <Link href={`/single/${house?.house_id}`} className='flex gap-3'>
            <Image src={house?.image} alt='' className='h-14 w-[30%]  object-cover' width={100} height={100}/>
            <div>
                <h1 className='text-sm font-medium'>{house?.title}</h1>
                <h3 className=' text-sm mt-2 text-primary_color'>${house?.rent}</h3>
            </div>
        </Link>
    )
}

export default async function TopRelatedSearch({tags}:{tags:string[]}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/house?tags=${tags.toString()}&range=0-4`)
    const data:HomeType[] = await res.json()
    const houseArr = data?.map((item,index)=>(
        <Card house={item} key={index}/>
    ))
  return (
    <div className='p-4 w-full min-h-36 border mt-7'>
      <SimpleTitle text='Top Related Homes'/>
      <div className='mt-3 flex flex-col gap-2'>
        {houseArr}
      </div>
    </div>
  )
}
