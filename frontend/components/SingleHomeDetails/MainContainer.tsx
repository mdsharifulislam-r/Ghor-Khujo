import React from 'react'
import Header from './Header/Header'
import Container from './Container'
import SideBar from './SideBar'
import { HomeType } from '@/Types/Types'

export default function MainContainer({home}:{home:HomeType}) {
  return (
    <div className=''>
      <Header image={home?.image} sideImages={home?.side_images}/>

      <div className="container mx-auto flex flex-col md:flex-row gap-6 min-h-screen mt-16 px-5">
        <Container home={home}/>
        <SideBar home={home}/>
      </div>
    </div>
  )
}
