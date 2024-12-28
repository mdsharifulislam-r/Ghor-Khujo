import { useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'

export default function Price() {
  const [rend,setRent]=useState(0)
  const searchParams = useSearchParams()
  const str = Object.fromEntries(searchParams)

  const router = useRouter()
  const func = (e:ChangeEvent<HTMLInputElement>)=>{
    setRent(parseInt(e.target.value))
    str['rent']=`${rend}`

    const searh = new URLSearchParams(str)
    router.push(`/homes?${searh.toString()}`,{scroll:false})
    
  }
  return (
    <div className='w-full'>
      <div className='w-full flex justify-end'>
        <span>${rend}</span>
      </div>
      <input type="range" name="" onChange={func} defaultValue={0} id="" min={1000} max={100000} className='w-full accent-primary_color' />
    
    </div>
  )
}
