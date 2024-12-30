'use client'
import React, { useEffect, useState } from 'react'
import ProfileButton from './ProfileButton/ProfileButton'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';
import Image from 'next/image';
export default function SmallNavbar({links}:{links:React.JSX.Element[]}) {
  const Navlinks = links?.map((item,index)=>{
    return (
      <div onClick={()=>setOpen(!open)} key={index} className='py-3 w-full border-b'>
        {item}
        </div>
    )
  })

  const [open,setOpen]=useState(false)
  const [hydred,setHydred]=useState(false)
  useEffect(()=>setHydred(true),[])
  return (
    <div className='w-full md:hidden block py-4 px-5 bg-white'>
    <div className='w-full flex justify-between place-items-center'>
    <div className="logo">
    <Image src={'/image/logo.webp'} alt='' height={100} width={100}/>
      </div>
      <div className='flex place-items-center gap-4'>
      {hydred&&<ProfileButton/>}
      <button onClick={()=>setOpen(!open)} className='px-4 py-2.5 bg-primary_color text-white'>
        <CiMenuFries/>
      </button>
      </div>
      
    </div>
  <div  className={`fixed w-full ${open?"opacity-100  pointer-events-auto":"opacity-0 pointer-events-none"} transition-all duration-300 h-screen bg-black/40 top-0 left-0 z-50 `}> 
    <div onClick={()=>setOpen(!open)} className="absolute cursor-pointer w-full h-full top-0 left-0 ">

    </div>
  <div className={`sidebar ${!open?"-translate-x-full":"translate-x-0"} transition-all duration-300 p-5 w-[80%] bg-white h-screen`}>
    <div className='py-3 border-b flex justify-between place-items-center'>
    <Image src={'/image/logo.webp'} alt='' height={60} width={70}/>
        <span className='text-2xl cursor-pointer'><RxCross1/></span>
    </div>
    <div>
        {Navlinks}
    </div>
  </div>
  </div>
  </div>
  )
}
