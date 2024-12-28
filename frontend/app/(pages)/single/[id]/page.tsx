import MainContainer from '@/components/SingleHomeDetails/MainContainer'
import { getSingleHouse } from '@/lib/helper/getSingleHouse'
import { HomeType } from '@/Types/Types'
import React from 'react'

export default async function page({params}:{params:any}) {
  const id:string = (await params).id
  const home:HomeType = await getSingleHouse(id)
  return (
    <div>
      <MainContainer home={home}/>
    </div>
  )
}
