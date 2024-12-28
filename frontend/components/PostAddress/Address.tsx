'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import SelectItem from '../Common/InputItem/SelectItem'

export default function Address({setAddressk}:{ setAddressk:React.Dispatch<React.SetStateAction<string>>}) {
    const [division,setDivision]=useState<string[]>([])
    const [district,setDistrict]=useState<string[]>([])
    const [upazilla,setUpazilla]=useState<string[]>([])
    const [address,setAddress]=useState({
        division:"",
        district:"",
        upazilla:""
    })
    useEffect(()=>{
        fetch("https://bdapis.com/api/v1.2/divisions")
            .then(res=>res.json())
            .then((data:{data:[{division:string}]})=>setDivision(()=>{
                const newArr = data?.data?.map(item=>item.division)
                return newArr
            })
            )
    },[])

   async function handleAddress(e:ChangeEvent<HTMLSelectElement>){
    const {name,value} = e.target
    setAddress(prev=>{
        return {
            ...prev,
            [name]:value
        }
    })
  
    if(name =="division"){
        const res = await fetch(`https://bdapis.com/api/v1.2/division/${value}`)
       const data:{data:{district:string}[]} = await res.json()
       const district = data?.data?.map(item=>item.district)
       
       setDistrict(district) 
    }
    if(name =="district"){
        const res = await fetch(`https://bdapis.com/api/v1.2/division/${address.division}`)
       const data:{data:{district:string,upazilla:[]}[]} = await res.json()
       const district = data?.data?.find(item=>item.district==value)
       setUpazilla(district?.upazilla||[])
      
    }
    
   }
  return (
    <div onMouseLeave={()=>setAddressk(`${address.division},${address.district},${address.upazilla}`)} className='flex w-full  gap-2 flex-col md:flex-row '>
            <SelectItem
            label='Divition'
            options={["Select Divition",...division]}
            name='division'
            id='divition'
            onChange={handleAddress}
            />
            <SelectItem
            label='Zilla'
            options={["Select District",...district]}
            name='district'
            id='zilla'
            onChange={handleAddress}
            />
            <SelectItem
            label='Upazilla'
            options={["Select Upazilla",...upazilla]}
            name='upazilla'
            id='upazilla'
            onChange={handleAddress}
            />
            
          </div>
  )
}
