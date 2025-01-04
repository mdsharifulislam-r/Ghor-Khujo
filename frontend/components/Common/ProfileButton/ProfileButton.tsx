'use client'
import { logoutUser } from '@/lib/features/user.reducer'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProfileButton() {
    const user = useAppSelector(state=>state.userReducer.user)
    const [hydred,setHydred]=useState(false)
    const router = useRouter()
    const dispatch = useAppDispatch()
    useEffect(()=>{
        setHydred(true)
    },[])

    const func = () =>{
      dispatch(logoutUser())
      router.push("/")
    }
  return (
    <div className='relative group'>
{hydred &&<div>
       <>{!user?.name ?<div className='flex gap-4'>
            <Link className='px-3 py-2  border border-primary_color md:text-base text-sm text-primary_color hover:bg-primary_color hover:text-white transition-all duration-500' href={"/login"}>Sign In</Link>
            <Link className='px-3 py-2 md:block hidden  hover:border hover:border-primary_color text-sm md:text-base hover:text-primary_color hover:bg-white bg-primary_color text-white transition-all duration-500' href={"/register"}>Sign Up</Link>
          </div>
          :<div className=" size-10 rounded-full bg-slate-200 cursor-pointer overflow-hidden">
            <Image src={user?.image||"/image/avtar/avtar.png"} alt='' width={60} height={60}/>
          </div>}</>
    </div>}
    {hydred &&<div className={`absolute ${user?.name?"group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto":""} pointer-events-none opacity-0 translate-y-8 transition-all duration-500 min-w-24 before:absolute before:top-0 before:left-0 before:bg-primary_color before:w-full before:h-1 min-h-14 bg-white top-10 right-0 shadow-lg`}>
      <Link className='px-4 py-2 mt-2 text-slate-700 block border-b' href={"/dashboard"}>Dashboard</Link>
      <button onClick={func} className='px-4 py-2  text-slate-700 border-b'>Logout</button>
    </div>}
    </div>
    
  )
}
