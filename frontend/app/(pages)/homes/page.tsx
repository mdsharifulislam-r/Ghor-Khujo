import Header from '@/components/Common/Header/Header'
import MainContainer from '@/components/Shop/MainContainer'
import React from 'react'

export interface searchParams{search?:string,address?:string,for?:string,type?:string,rent?:number}

export default async function page({searchParams}:{searchParams:any}) {
  const data:searchParams=await searchParams
  return (
    <div className='md:w-[70%] w-full px-3'>
      <MainContainer searchParams={data}/>
    </div>
  )
}
