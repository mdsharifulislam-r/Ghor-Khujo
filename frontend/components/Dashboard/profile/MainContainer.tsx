'use client'
import React, { useState } from 'react'
import ImageBox from './ImageBox'
import InputBox from './InputBox'
import LoadingButton from '@/components/Common/Button/Button'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { useFormik } from 'formik'
import { UpdateSchema } from '@/validation/validation'
import { uploadImage } from '@/lib/helper/uploadImage'
import toast from 'react-hot-toast'
import { setUser } from '@/lib/features/user.reducer'

export default function MainContainer() {
    const [files,setFiles]=useState<any>()
    const [loading,setLoading]=useState(false)
    const [image,setImage]=useState("")
    const Dispatch = useAppDispatch()
    const user = useAppSelector(state=>state.userReducer.user)
    const initalValues = {
        name:user?.name||"",
        email:user?.email||"",
        address:user?.address||"",
        phone:user?.phone||""
    }

    const {values,handleChange,handleSubmit,errors} = useFormik({
        initialValues:initalValues,
        validationSchema:UpdateSchema,
        onSubmit:async (values,action)=>{
            setLoading(true)
            if(files){
                const imgstr = await uploadImage(files)
              
                
                setImage(imgstr)
            }

        
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/update`,{
                method:"PUT",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({
                    ...values,
                    image:image||user?.image
                }),
                credentials:"include"
            })
            const data = await res.json()
            if(data?.status){
                setLoading(false)
                Dispatch(setUser(data.user))
                toast.success(data?.message)
            }else{
                setLoading(false)
                toast.error(data?.message)
            }
            
        }
    })
  return (
    <div>
      <p className='px-3 py-2 bg-slate-200 text-slate-600'>Please fill your right address.Try to be not scam,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, at. Quos veritatis sed delectus amet porro unde omnis ipsam optio!</p>
      <form onSubmit={handleSubmit} action="" className='mt-10'>
        <ImageBox setFiles={setFiles}/>

        <div className='mt-5 w-full flex flex-col gap-4'>
            <div className='flex place-items-center w-full gap-4'>
                <InputBox
                name='name'
                label='Full Name'
                id='name'
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                />
                 <InputBox
                name='email'
                label='Email Address'
                id='email'
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                />
            </div>
            <div className='flex place-items-center w-full gap-4'>
                <InputBox
                name='address'
                label='Address'
                id='address'
                value={values.address}
                onChange={handleChange}
                error={errors.address}
                />
                 <InputBox
                name='phone'
                label='Phone Number'
                id='phone'
                value={values.phone}
                onChange={handleChange}
                error={errors.phone}
                />
            </div>
        </div>
        <div>
            <LoadingButton isLoading={loading} className='px-4 py-2 bg-primary_color text-white mt-3'>Update</LoadingButton>
        </div>
      </form>
    </div>
  )
}
