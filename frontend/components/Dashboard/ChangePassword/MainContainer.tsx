'use client'
import { SimpleTitle } from '@/components/SingleHomeDetails/SideBar'
import React, { useState } from 'react'
import InputBox from '../profile/InputBox'
import LoadingButton from '@/components/Common/Button/Button'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { getAuthToken } from '@/lib/helper/getAuthToken'

export default function MainContainer() {
  const initialValue = {
    oldPassword:"",
    newPassword:""
  }

  const [loading,setLoading]=useState(false)
  const {values,handleChange,handleSubmit} = useFormik({
    initialValues:initialValue,
    onSubmit:async(values,action)=>{
      setLoading(true)
      const authToken = await getAuthToken()
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/chnage-password`,{
        method:"PUT",
        body:JSON.stringify(values),
        headers:{
          "Content-Type":"application/json",
          "authorization":`${authToken}`
        },
        credentials:"include"
      })

      const data = await res.json()

      if(data?.status===true){
        setLoading(false)
        toast.success(data.message)
        action.resetForm()
      }else{
        setLoading(false)
        toast.error(data.message)
      }
      
    }
  })
  return (
    <div>
      <SimpleTitle
      text='Change Password'
      />
      <p className='p-5 text-slate-600 bg-slate-200 mt-5'>If you want Change password provide the old password and the new password. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam enim nobis!</p>
      <form onSubmit={handleSubmit} action="" className='mt-3 flex flex-col gap-4'>
        <InputBox
        label='Old Password'
        name='oldPassword'
        id='oldPassword'
        required
        value={values.oldPassword}
        onChange={handleChange}
        type='password'
        />
        <InputBox
        label='New Password'
        name='newPassword'
        id='newPassword'
        required
        value={values.newPassword}
        onChange={handleChange}
        type='password'
      
        />
        <LoadingButton isLoading={loading} className='px-5 py-2 bg-primary_color text-white mt-3'>Change Password</LoadingButton>
      </form>
    </div>
  )
}
