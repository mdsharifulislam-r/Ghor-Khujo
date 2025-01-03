"use client"
import { RegisterSchema } from '@/validation/validation'
import { useFormik } from 'formik'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import LoadingButton from '../Common/Button/Button'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/hooks/hooks'
import GoogleSignInButton from '../GoogleSignInButton/GoogleSignInButton'
import Link from 'next/link'
import { verifyTokenSet } from '@/lib/helper/setVerifyToken'
const initialValues={
  name:"",
  email:"",
  phone:"",
  address:"",
  password:"",
  confirmed_password:""
}
export default function MainContainer() {
  

const [loading,setLoading]=useState(false)
const router = useRouter()
const {values,handleChange,handleSubmit,errors} = useFormik({
initialValues:initialValues,
validationSchema:RegisterSchema,
onSubmit:async (values,action)=>{
  setLoading(true)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(values),
    credentials:"include"
  })

  const data = await res.json()

  if(data?.statusCode==201){
    toast.success(data?.message[0])
    action.resetForm()
    await verifyTokenSet()
    setLoading(false)
    router.push("/verify")
  }else{
    toast.error(data?.message[0])
    setLoading(false)
  }
  
}

})


  return (
    <div className=" container mx-auto my-2">
  <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
  
    <form onSubmit={handleSubmit} className="max-w-xl w-full p-6 mx-auto">
      <div className="mb-5">
        <h3 className="text-gray-800 text-4xl font-extrabold">Sign Up</h3>
        <p className="text-gray-800 text-sm mt-3">
          You have an account{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Login here
          </Link>
        </p>
      </div>
      <div className='my-2'>
        <label className="text-gray-800 text-sm block">Full Name</label>
        <div className="relative flex items-center">
          <input
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
            placeholder="Enter Full Name"
          />
         
        </div>
        {errors?.name && <span className='text-sm text-red-500'>{errors?.name}</span>}
      </div>
      <div>
        <label className="text-gray-800 text-sm block mb-2">Email</label>
        <div className="relative flex items-center">
          <input
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            required
            className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
            placeholder="Enter email"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2"
            viewBox="0 0 682.667 682.667"
          >
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000" />
              </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
              <path
                fill="none"
                strokeMiterlimit={10}
                strokeWidth={40}
                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                data-original="#000000"
              />
              <path
                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                data-original="#000000"
              />
            </g>
          </svg>
        </div>
        {errors?.email && <span className='text-sm text-red-500'>{errors?.email}</span>}
      </div>
      <div className='my-2'>
        <label className="text-gray-800 text-sm block">Phone</label>
        <div className="relative flex items-center">
          <input
            name="phone"
            type="text"
            value={values.phone}
            onChange={handleChange}
            required
            className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
            placeholder="Enter Phone"
          />
       
        </div>
        {errors?.phone && <span className='text-sm text-red-500'>{errors?.phone}</span>}
      </div>
     
      <div className='my-2'>
        <label className="text-gray-800 text-sm block mb-2">Address</label>
        <div className="relative flex items-center">
          <input
            name="address"
            type="text"
            required
            value={values.address}
            onChange={handleChange}
            className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
            placeholder="Enter Address"
          />
         
        </div>
        {errors?.address && <span className='text-sm text-red-500'>{errors?.address}</span>}
      </div>
      <div className="">
        <label className="text-gray-800 text-sm block mb-2">Password</label>
        <div className="relative flex items-center">
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
            className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
            placeholder="Enter password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            />
          </svg>
        </div>
        {errors?.password && <span className='text-sm text-red-500'>{errors?.password}</span>}
      </div>
      <div className="">
        <label className="text-gray-800 text-sm block mb-2">Password</label>
        <div className="relative flex items-center">
          <input
            name="confirmed_password"
            type="password"
            value={values.confirmed_password}
            onChange={handleChange}
            required
            className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
            placeholder="Enter password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            />
          </svg>
        </div>
        {errors?.confirmed_password && <span className='text-sm text-red-500'>{errors?.confirmed_password}</span>}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-3 block text-sm text-gray-800"
          >
            Remember me
          </label>
        </div>
        <div>
          <a
            href="jajvascript:void(0);"
            className="text-blue-600 font-semibold text-sm hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </div>
      <div className="mt-5">
        <LoadingButton
         isLoading={loading}
          className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          Sign Up
        </LoadingButton>
      </div>
      <div className="my-2 flex items-center gap-4">
        <hr className="w-full border-gray-300" />
        <p className="text-sm text-gray-800 text-center">or</p>
        <hr className="w-full border-gray-300" />
      </div>
    <GoogleSignInButton/>
    </form>
    <div className="max-md:order-1 h-full  relative">
      <Image
        src="/image/login/register.webp"
        className="w-full h-full object-cover"
        alt="login-image"
        width={1000}
        height={1000}
      />
      <div className="absolute w-full flex flex-col justify-end h-full left-0 top-0 bg-gradient-to-t p-10 from-black/80  to-transparent">
      <h1 className='text-3xl font-bold text-white'>Sign Up to Ghor <span className='text-primary_color'>Khojo</span></h1>
      <p className='text-slate-200 text-sm pt-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis modi vel quidem placeat, repudiandae voluptates impedit quo ex qui officia ipsum fugit, libero maiores. Non quo accusamus corrupti consequuntur numquam!</p>
      </div>
    </div>
  </div>
</div>

  )
}
