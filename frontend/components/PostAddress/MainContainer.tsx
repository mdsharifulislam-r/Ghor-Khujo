'use client'
import React, { useState } from 'react'
import InputItem from '../Common/InputItem/InputItem'
import SelectItem from '../Common/InputItem/SelectItem'
import Address from './Address'
import ImageBox from './ImageBox'
import { useFormik } from 'formik'
import LoadingButton from '../Common/Button/Button'
import { HomeType } from '@/Types/Types'
import toast from 'react-hot-toast'
import { getAuthToken } from '@/lib/helper/getAuthToken'

export default function MainContainer() {
const initialValue={
  house_name:"",
  title:"",
  for:"",
  type:"",
  road:"",
  desc:"",
  rent:0,
  phone:"",
  capacity:"",
  owner_name:"",
 
}
const [images,setImages]=useState<string[]>([])
const [address,setAddress]=useState("")

const {values,handleSubmit,handleChange} = useFormik({
initialValues:initialValue,
onSubmit:async(values,action)=>{

  const data:HomeType={
    ...values,
    address:values.road+","+address,
    image:images[0],
    side_images:images.length>1?images.slice(1,images.length).toString():"",
    tags:[...(address+","+values.road).split(",")],
    publishDate:new Date().toLocaleDateString()
  }

  const token = await getAuthToken()
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/house/create`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "authorization":`${token}`
    },
    body:JSON.stringify(data),
    credentials:"include"
  })

  const response = await res.json()
  if(response.statusCode==201){
    toast.success(response.message[0])
    action.resetForm()
  }else{
    toast.error(response.message[0])
  }

}
})

  return (
    <div className='w-full bg-dark_color '>
      <div className="container py-5 px-3 flex justify-center mx-auto flex-col gap-3 place-items-center">
      <h1 className='text-slate-600 text-2xl'>Post A House Details</h1>
        <form onSubmit={handleSubmit} action="" className="form lg:w-fit md:w-fit w-full p-6 bg-white">
          <InputItem
          name='title'
          id='title'
          label='Title'
          priroty='ere'
          required
          onChange={handleChange}
          value={values.title}
          />
          <InputItem
          name='house_name'
          id='house_name'
          label='House Name'
          priroty='re'
          required
          onChange={handleChange}
          value={values.house_name}
          />
          <InputItem
          name='phone'
          id='Phone'
          label='Phone'
          priroty='re'
          required
          onChange={handleChange}
          value={values.phone}
          />

          <div className='flex w-full  gap-2 flex-col md:flex-row '>
          <InputItem
          name='rent'
          id='rent'
          label='Rent'
          priroty='re'
          type='number'
          required
          onChange={handleChange}
          value={values.rent}
          />
          <InputItem
          name='capacity'
          id='capacity'
          label='Capacity'
          type='string'
          onChange={handleChange}
          value={values.capacity}
          />
          <InputItem
          name='owner_name'
          id='owner_name'
          label='Owner Name'
          onChange={handleChange}
          value={values.owner_name}
          />
          </div>
          <textarea name="desc" onChange={handleChange} value={values.desc} className='w-full min-h-20 my-2 rounded-md focus:outline-none border p-3' placeholder='Description' id=""></textarea>
          <div className='flex w-full  gap-2 flex-col md:flex-row '>
            <SelectItem
            label='For'
            options={["Select For","Bachlor","Family","Any"]}
            name='for'
            id='for'
            required
            onChange={handleChange}
          value={values.for}
            />
            <SelectItem
            label='Type'
            options={["Select Room","Flat","Sublet","Any"]}
            name='type'
            id='type'
            onChange={handleChange}
          value={values.type}
            required
            />
            
          </div>
          <Address
          setAddressk={setAddress}
          />
          <InputItem
          label='Road Address'
          name='road'
          priroty='dfdf'
          onChange={handleChange}
          value={values.road}
          />
          <ImageBox
          setImagesData={setImages}
          />
          <LoadingButton className='w-full py-1.5 bg-primary_color text-white mt-4'>
            Submit
          </LoadingButton>
        </form>
      </div>


    </div>

  )
}
