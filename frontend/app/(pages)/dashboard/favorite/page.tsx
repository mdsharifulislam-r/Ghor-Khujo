import MainContainer from '@/components/Dashboard/favariteHomes/MainContainer'
import { SimpleTitle } from '@/components/SingleHomeDetails/SideBar'
import React from 'react'

export default function page() {
  return (
    <div>
      <SimpleTitle text='Favariote Homes'/>
      <MainContainer/>
    </div>
  )
}
