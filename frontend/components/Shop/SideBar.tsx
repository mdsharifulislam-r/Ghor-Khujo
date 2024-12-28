'use client'
import CheckBox from './CheckBox/CheckBox'
import Price from './Price/Price'
import SelectBox from './SelectBox/SelectBox'
import Address from './Address/Address'
import For from './For/For'
import { useState } from 'react'
import HomeType from './type/HomeType'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { useDispatch } from 'react-redux'
import { setShowFilter } from '@/lib/features/user.reducer'


export default function SideBar() {
  const [address,setAddress]=useState('')
  const [forValue,setFor]=useState('')
  const [homeType,setHomeTypes]=useState("")
  const showFilter = useAppSelector(state=>state.userReducer.showFilter)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const func = ()=>{
    if(address||forValue||homeType){
      const str = `address=${address}&for=${forValue}&type=${homeType}`
      dispatch(setShowFilter())
    router.push(`/homes?${str}`)
    }
    
  }

  return (
    <div className={`md:w-[30%] w-full  md:sticky overflow-y-scroll ${showFilter?"pointer-events-auto opacity-100":"pointer-events-none opacity-0 md:opacity-100 md:pointer-events-auto"} fixed left-0 md:top-3 top-0 md:h-fit h-screen z-50 md:z-auto `}>
      <div onClick={()=>dispatch(setShowFilter())} className={`absolute cursor-pointer w-full h-full z-0 left-0 top-0 ${showFilter?"opacity-100":"opacity-0"} transition-all duration-200 bg-black/55`}>

      </div>
      <div className={`md:w-full relative z-10 w-[90%] transition-all duration-500  mx-auto bg-white h-fit md:p-7 p-3 border md:mt-0 mt-11  ${showFilter?"-translate-y-0 md:translate-y-0":"-translate-y-full md:translate-y-0"}`}>
      <div>
        <h3 className='text-lg font-semibold'>Address</h3>
        <Address setAddressk={setAddress}/>
      </div>

      <div>

      </div>
      <div>
      <h3 className='text-lg font-semibold'>House For</h3>
      <div className="md:pb-1">
        <For setFor={setFor}/>
      </div>
      </div>
      <div>
      <h3 className='text-lg font-semibold'>House Type</h3>
      <div className="md:pb-1">
        <HomeType setFor={setHomeTypes}/>
      </div>
      </div>
      <Price/>
      <div>
        <button className='w-full py-2 bg-primary_color text-white md:mt-3' onClick={func}>Filter</button>
      </div>
      </div>
     
    </div>
  )
}
