import MainContainer from '@/components/Verify/MainContainer'
import React from 'react'

export default async function page({params}:{params:any}) {
    const id = await params.id
  return (
    <div>
      <MainContainer id={id}/>
    </div>
  )
}
