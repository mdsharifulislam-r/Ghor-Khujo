'use client'
import { setShowDashboard } from '@/lib/features/user.reducer';
import { useAppDispatch } from '@/lib/hooks/hooks';
import React from 'react'
import { RiMenuUnfold3Line } from "react-icons/ri";
export default function ShowDashbordButton() {
    const dispatch = useAppDispatch()
  return (
    <button onClick={()=>dispatch(setShowDashboard())} className='px-3 flex md:hidden mt-4 ml-5 py-2 place-items-center gap-2 bg-primary_color text-white'>
        <span>Show Menu</span>
        <span><RiMenuUnfold3Line/></span>
    </button>
  )
}
