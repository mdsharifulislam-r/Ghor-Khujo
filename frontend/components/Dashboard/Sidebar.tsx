'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaHome, FaLock } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoLogOutOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks';
import { logoutUser, setShowDashboard } from '@/lib/features/user.reducer';
function SideLink({icon,title,link,click}:{icon:any,title:string,link:string,click:()=>void}){
    const pathName = usePathname()
   
    
    return (
        <Link onClick={click} href={`/dashboard${link}`} className='flex justify-between place-items-center py-4 text-slate-600 border-b px-8'>
            <span>{title}</span>
            <span>{icon}</span>
        </Link>
    )
}


export default function Sidebar() {
    const func = ()=>{
        dispatch(setShowDashboard())
    }
    const links = [
        {
            title:"Dashboard",
            link:"/",
            icon:<FaHome/>
        },
        {
            title:"Profile",
            link:"/account",
            icon:<FaUser/>
        },
        {
            title:"My Properties",
            link:"/myhome",
            icon:<TfiMenuAlt/>
        },
        {
            title:"Favorited Properties",
            link:"/favorite",
            icon:<CiHeart/>
        },
        {
            title:"Change Password",
            link:"/change-password",
            icon:<FaLock/>
        },
    
    ].map((item,index)=>(
        <SideLink
        icon={item.icon}
        title={item.title}
        link={item.link}
        key={index}
        click={func}
        />
    ))
   
    const dispatch = useAppDispatch()
    const router = useRouter()
    const showFilter = useAppSelector(state=>state.userReducer.showDashboard)
  return (
    <div className={`md:w-[30%] z-50 md:z-auto fixed md:sticky ${showFilter?"pointer-events-auto opacity-100":"pointer-events-none opacity-0 md:opacity-100 md:pointer-events-auto"} w-full left-0 top-0 h-screen min-h-screen`}>
        <div onClick={()=>dispatch(setShowDashboard())} className={`absolute w-full h-full bg-black/40 top-0 left-0 ${showFilter?"opacity-100":"opacity-0"} z-0 cursor-pointer`}></div>
 <div className={`md:w-full w-[80%] h-screen border bg-white p-5 relative z-10 ${showFilter?"-translate-x-0 md:translate-x-0":"-translate-x-full md:translate-x-0"} md:p-0 transition-all duration-500`}>
        {links}
        <div onClick={()=>{
            dispatch(logoutUser())
            router.push('/')
            }} className='flex justify-between place-items-center py-4 cursor-pointer text-slate-600 border-b px-8'>
            <span>Logout</span>
            <span><IoLogOutOutline/></span>
        </div>
    </div>
    </div>
   
  )
}
