import ShowDashbordButton from '@/components/Dashboard/ShowDashbordButton';
import Sidebar from '@/components/Dashboard/Sidebar';
import React, { ReactNode } from 'react'
import { PiGreaterThanLight } from "react-icons/pi";

export default function layout({children}:{children:ReactNode}) {
  return (
    <div className='w-full'>
      <div className="header w-full bg-dark_color">
        <div className="container mx-auto min-h-60 flex place-items-center pl-7 md:pl-0">
            <div>
                <h1 className='text-4xl font-semibold text-slate-600'>My Account</h1>
                <div className='flex place-items-center gap-3 text-slate-600 mt-2'>
                    <span>Home</span><span className='text-primary_color'><PiGreaterThanLight/></span><span>My Account</span>
                </div>
            </div>
        </div>
      </div>
      <ShowDashbordButton/>
      <div className="container mx-auto md:mt-16 mt-5 flex gap-8 px-5 md:px-0">
        <Sidebar/>
        <div className="md:w-[70%] w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
