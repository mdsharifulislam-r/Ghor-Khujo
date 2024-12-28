'use client'
import { setShowFilter } from '@/lib/features/user.reducer';
import { useAppDispatch } from '@/lib/hooks/hooks';
import React from 'react'
import { RiMenuFold2Line } from "react-icons/ri";
export default function ShowButton() {
    const dispatch = useAppDispatch()
  return (
    <div className='flex md:hidden w-full mb-5 justify-start'>
      <button onClick={()=>dispatch(setShowFilter())} className='flex place-items-center gap-4 px-4 py-2 bg-primary_color text-white'>
        <span>Show Filter</span>
        <span><RiMenuFold2Line/></span>
      </button>
    </div>
  )
}
