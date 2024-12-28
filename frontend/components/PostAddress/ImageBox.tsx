'use client'
import { uploadImage } from '@/lib/helper/uploadImage'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'

export default function ImageBox({setImagesData}:{setImagesData: React.Dispatch<React.SetStateAction<string[]>>}) {
    const [images,setImages]=useState<string[]>([])

    const imageArr = images?.map(item=>(
<Image src={item} className='w-24 h-full object-cover' alt='' key={item} width={100} height={100}/>
    ))

    const saveImages = async (e:ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files
        const image = await uploadImage(files)
        
        setImages([...images,image])
    }
  return (
    <div onMouseLeave={()=>setImagesData(images)} className='w-full bg-dark_color h-20 flex gap-2 mt-2 p-2'>
      {imageArr}
      <div className='w-20 h-full relative '>
        <input type="file" name="" onChange={saveImages} hidden id="image" />
        <label htmlFor="image" className='w-full flex justify-center text-4xl place-items-center cursor-pointer absolute top-0 left-0 h-full bg-white'>
            {"+"}
        </label>
      </div>
    </div>
  )
}
