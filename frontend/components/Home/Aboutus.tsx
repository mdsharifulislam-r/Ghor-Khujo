import Image from 'next/image'
import React from 'react'
import { HiOutlineHome } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";
import { TfiMapAlt } from "react-icons/tfi";
function Card({icon,title,index}:{icon:any,title:string,index:number}){
  return(
    <div data-aos="fade-up" data-aos-delay={index} className='flex gap-3 px-3 py-4 border border-slate-100 before:absolute relative before:bg-primary_color before:w-1 before:h-full top-0 before:scale-y-0 hover:before:scale-y-100 transition-all duration-500 before:transition-all before:duration-500 hover:shadow-xl left-0 place-items-center'>
      <div className="icon text-5xl flex justify-center place-items-center text-primary_color w-[20%]">
        {icon}
      </div>
      <div className="text">
        <h1 className='text-xl pb-3 text-text_color font-bold transition-all duration-500 hover:text-primary_color'>
        {title}</h1>
        <p className='text-base text-slate-700 font-light'>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
      </div>
    </div>
  )
}

export default function Aboutus() {
  return (
    <div className='w-full py-10'>
        <div className="container mx-auto  flex flex-col md:flex-row gap-4">
            <div className="image md:w-1/2 h-full p-10" data-aos="fade-right">
            <Image src={'/image/about/about.webp'} alt='' width={1000} height={1000}/>  
            </div>

            <div className="text md:w-1/2 py-10 px-5">
            <span className='text-primary_color' data-aos="fade-up" data-aos-delay={300}>About Us</span>
            <h1 data-aos="fade-up" data-aos-delay={500} className='md:text-5xl text-3xl font-bold text-text_color pt-6 leading-[1.3] py-2'>
            Dream Living Spaces <br /> Setting New Build
      </h1>
      <p data-aos="fade-up" data-aos-delay={700} className='w-[80%] text-slate-600 font-light'>
      Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
      </p>
      <div className='flex flex-col py-3 gap-2'>
        <Card
        index={500}
        icon={<HiOutlineHome/>} title='The Perfect Residency'
        />
        <Card
        index={700}
        icon={<GrUserManager/>} title='The Perfect Residency'
        />
        <Card
        index={900}
        icon={<TfiMapAlt/>} title='The Perfect Residency'
        />
      </div>
            </div>
        </div>
      
    </div>
  )
}
