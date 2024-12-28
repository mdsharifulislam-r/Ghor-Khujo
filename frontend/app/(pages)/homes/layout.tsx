import Header from '@/components/Common/Header/Header'
import ShowDashbordButton from '@/components/Dashboard/ShowDashbordButton'
import MainContainer from '@/components/Shop/MainContainer'
import SideBar from '@/components/Shop/SideBar'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Header/>
      
      <div className='flex my-7 w-full gap-3 container mx-auto'>
        <SideBar/>
        {children}
      </div>
    </div>
  )
}
