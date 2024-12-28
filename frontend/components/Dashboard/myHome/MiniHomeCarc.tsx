import { HomeType } from '@/Types/Types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'

export default function MiniHomeCard({home}:{home:HomeType}) {
  return (
    <div className='flex place-items-center justify-between px-3 py-3 border'>
      <div className='flex gap-3'>
        <Image src={home?.image||'/image/hero/pic2.webp'} alt='' width={100} height={100} className='w-20 object-cover h-16'/>
        <Link href={`/single/${home?.house_id}`} className="text">
            <h1 className='text-base font-semibold text-text_color hover:text-primary_color'>{home?.title}</h1>
            <h3 className='text-sm font-light'>{home?.address}</h3>
        </Link>
      </div>

      <div className='flex gap-3'>
        <button className='p-3 bg-slate-200 rounded-md text-slate-700'>
            <FaEdit/>
        </button>
        <button className='p-3 bg-slate-200 rounded-md text-slate-700'>
            <RxCross1/>
        </button>
      </div>
    </div>
  )
}
