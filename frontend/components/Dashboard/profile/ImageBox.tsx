'use client'
import { useAppSelector } from '@/lib/hooks/hooks'
import Image from 'next/image'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FaCamera } from 'react-icons/fa'

export default function ImageBox({setFiles}:{setFiles:React.Dispatch<any>}) {
    const [image,setImage]=useState("")
    const user = useAppSelector(state=>state.userReducer.user)
    const changeImage = (e:ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files
        const pick:any = files

        const url = URL.createObjectURL(pick[0])
        setFiles(files)
        setImage(url)
        
        
    }

    const [hydred,setHydred]=useState(false)
    useEffect(()=>setHydred(true),[])
  return (
    <div className='w-full flex justify-center place-items-center'>
        <div className=" size-40 bg-slate-600 rounded-full relative overflow-hidden">
           {hydred && <Image src={image||user?.image||'/image/avtar/avtar.png'} alt='' width={200} height={200} className=' absolute object-cover w-full h-full left-0 top-0'/>}
            <div className="absolute w-full h-full top-0 left-0 bg-black/40 flex justify-center place-items-center">
            <label htmlFor="image" className='text-4xl text-white cursor-pointer'>
                <input type="file" name="" hidden onChange={changeImage} id="image" />
            <FaCamera/>
            </label>
            </div>
        </div>
    </div>
  )
}
