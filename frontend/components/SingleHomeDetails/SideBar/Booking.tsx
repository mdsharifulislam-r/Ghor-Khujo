"use client"
import React, { useEffect, useState } from 'react'
import { SimpleTitle } from '../SideBar'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'

import { getSingleUser } from '@/lib/helper/getSingleUser'
import LoadingButton from '@/components/Common/Button/Button'

export default function Booking({id}:{id:number}) {
  const [to,setTo]=useState("")
  useEffect(()=>{
    getSingleUser(id).then(data=>{
      setTo(data?.email)
    })
  },[])
  const initailValue = {
    from:"",
    name:"",
    message:"",
  }

  const [loading,setLoading]=useState(false)
  const {values,handleChange,handleSubmit} = useFormik({
    initialValues:initailValue,
    onSubmit:async (values,action)=>{
      setLoading(true)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/house/send-mail`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          ...values,
          to
        })
      })

      const data = await res.json()

      if(data.statusCode==201){
        setLoading(false)
        toast.success(data.message[0])
        action.resetForm()
      }else{
        setLoading(false)
        toast.error(data.message[0])
      }
    }
  })
  return (
    <div className='p-4 border mt-7'>
      <SimpleTitle text='Send Message to Owner'/>
      <form onSubmit={handleSubmit} action="" className='mt-3'>
        <input value={values.name} onChange={handleChange} type="text" required placeholder='Name*' name='name' className='py-2 w-full p-3 focus:outline-none border focus:border-primary_color' />
        <input value={values.from} onChange={handleChange} type="text" required placeholder='Email*' name='from' className='py-2 mt-3 w-full p-3 focus:outline-none border focus:border-primary_color' />
        <textarea value={values.message} onChange={handleChange} name='message' required placeholder='Message' className='w-full py-2 focus:outline-none focus:border-primary_color px-3 border min-h-28 mt-3'></textarea>
        <LoadingButton isLoading={loading} className='w-full bg-primary_color text-white py-2 mt-3 hover:bg-text_color'>Send Message</LoadingButton>
      </form>
    </div>
  )
}
