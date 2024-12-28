import React from 'react'
import SearchSection from './SearchSection'
import Container from './Container'
import { searchParams } from '@/app/(pages)/homes/page'
import ShowButton from './ShowButton'

export default function MainContainer({searchParams}:{searchParams?:searchParams}) {
  return (
    <div className='w-full'>
      <ShowButton/>
      <SearchSection/>
      <Container search={searchParams}/>
    </div>
  )
}
