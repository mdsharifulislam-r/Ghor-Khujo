import Header from '@/components/Common/Header/Header'
import Loader from '@/components/Common/Loader/Loader'
import ShowDashbordButton from '@/components/Dashboard/ShowDashbordButton'
import MainContainer from '@/components/Shop/MainContainer'
import SideBar from '@/components/Shop/SideBar'
import React, { Suspense } from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loader/>}>
      <div className='flex my-7 w-full gap-3 container mx-auto'>
        <SideBar/>
        {children}
      </div>
      </Suspense>
      
    </div>
  )
}
