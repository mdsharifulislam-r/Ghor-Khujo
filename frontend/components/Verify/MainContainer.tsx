'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function MainContainer({id}:{id:string}) {
   const [loading,setLoading]=useState(false)
   const [status,setStaus]=useState("")
   const router = useRouter()
   useEffect(()=>{
    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json()).then(data=>{
        if(data.status){
            setLoading(false)
            setStaus(data.message)

            setTimeout(() => {
                router.push("/login")
            },1000);
        }else{
            toast.error(data.message)
            setStaus(data.message)
            setLoading(false)
        }
    })
   },[])
  return (
    <div className='container mx-auto w-full h-screen p-5'>
      <div className='p-3 bg-green-100 rounded-md'>
        <h1 className='text-2xl pb-4 text-red-600'>{loading && !status ?"...Loading":status}</h1>
        </div>
    </div>
  )
}
