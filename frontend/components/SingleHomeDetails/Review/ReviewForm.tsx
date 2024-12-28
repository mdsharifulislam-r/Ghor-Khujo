'use client'
import React, { useState } from 'react'
import { SimpleTitle } from '../SideBar'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from "react-icons/fa";
import LoadingButton from '@/components/Common/Button/Button';
import { useFormik } from 'formik';
import { postReview } from '@/lib/helper/postReview';
import toast from 'react-hot-toast';
import { revalidateTag } from 'next/cache';
export default function ReviewForm({house_id}:{house_id:number}) {
    const [fill,setFill]=useState(3)
    const [loading,setLoading]=useState(false)
    const FixStar = (value:number)=>{
        setFill(value)
        
    }

    const {values,handleChange,handleSubmit} = useFormik({
      initialValues:{message:""},
      onSubmit:async (values,action)=>{
        setLoading(true)
        const data = await postReview({
          house_id,
          ...values,
          star:fill,
          date:new Date().toLocaleDateString()
        })

        if(data?.status){
         
          setLoading(false)
          toast.success(data.message)
          action.resetForm()
          setFill(0)
        }else{
          setLoading(false)
          toast.error(data.message)
        }
      }
    })
  return (
    <div className='p-8 bg-dark_color min-h-20 w-full mt-10'>
      <SimpleTitle text='Give a Review'/>
      <form onSubmit={handleSubmit} action="">
        <div className='flex my-5 gap-2 text-yellow-400 text-2xl'>
        {new Array(fill).fill("f").map((value,index)=>index+1).map((item,index)=>(<FaStar className='cursor-pointer transition-all duration-300 hover:-translate-y-3' onMouseOver={()=>FixStar(item)} key={index}/>))}
        {new Array(5-fill).fill("f").map((value,index)=>fill+(index+1)).map((item,index)=>(<FaRegStar className='cursor-pointer transition-all duration-300 hover:-translate-y-3' onMouseOver={()=>FixStar(item)} key={index}/>))}
        </div>
        <textarea name="message" onChange={handleChange} value={values.message} required className='w-full min-h-28 p-3 focus:outline-none focus:shadow-lg' placeholder='Message..' id=""></textarea>
        <LoadingButton isLoading={loading} className='px-4 py-2 mt-3 bg-primary_color text-white'>Submit</LoadingButton>
      </form>
    </div>
  )
}
