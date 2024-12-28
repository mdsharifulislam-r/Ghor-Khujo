import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-full p-5'>
     <div className='px-6 py-5 bg-slate-200'>
     <p className='text-slate-500 leading-[3] md:text-base text-sm'>
        Hello <span className='text-slate-600 font-bold'>MD Shariful Islam</span>. Are you searching for a Home. Click <Link className='px-4 py-2 bg-slate-600 text-white mx-4' href={'/homes'}>Homes</Link>
        Are you want to share a Home Post <Link className='px-4 py-2 bg-slate-600 text-white mx-4' href={"/post-address"}>Post Home</Link>
      </p>
     </div>
    </div>
  )
}
