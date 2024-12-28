import { getSingleUser } from '@/lib/helper/getSingleUser'
import { UserType } from '@/Types/Types'
import Image from 'next/image'
import React from 'react'

export default async function UserBox({id}:{id:number}) {
    const user:UserType = await getSingleUser(id)
  return (
    <div className="w-full min-h-52 border flex justify-center place-items-center flex-col gap-3 py-4">
        <Image src={user?.image||"/image/avtar/avtar.png"} alt='profile' height={400} width={400} className=' rounded-full object-cover border border-primary_color size-28'/>
        <h1 className=''>{user?.name}</h1>
        <a href={`tel:${user?.phone}`} className='text-sm text-slate-600'><span className=''>Phone</span>: {user?.phone}</a>
        <a href={`mailto:${user?.email}`} className='text-sm text-slate-600'><span className=''>Email</span>: {user?.email}</a>
    </div>
  )
}
