'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'


export default function useTransformSearchParams(searchString:string,item:string) {
    const searchParams = useSearchParams()
    const obj = Object.fromEntries(searchParams)
    
   
        obj[item]=searchString

    
    const url = new URLSearchParams(obj)
    const str = url.toString()
    const router = useRouter()
    useEffect(()=>{
        router.push(`/homes?${str}`)
    },[])
    
  return ""
}
