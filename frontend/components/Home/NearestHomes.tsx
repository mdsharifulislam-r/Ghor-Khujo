
'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import { LuMoveRight } from "react-icons/lu";

import { SwiperSlide,Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function Card({image,title,address}:{image:any,title:string,address:string}){
    return (
     
        <div className='p-5 bg-white shadow-lg mx-2 my-4'>
           <div className="imageBox">
            <Image src={image} alt='' className='w-full h-60' width={500} height={500}/>
            </div> 
            <div className='py-2'>
                <span className='text-slate-600 font-light'>
                    {address}
                </span>
                <h1 className='text-2xl font-bold text-text_color'>{title}</h1>
                <button className='flex place-items-center gap-2 mt-3 text-primary_color hover:gap-7 transition-all duration-500'>
                    <span>Rent Home</span>
                    <span><LuMoveRight/></span>
                </button>
            </div>

        </div>
        
    )
}

const tempData = [
    {
        address:"Debidwer,Cumilla",
        title:"10 Ways Find Home",
        image:"/image/hero/pic.webp"
    },
    {
        address:"Badda,Dhaka",
        title:"Aftaf Nagar Home",
        image:"/image/hero/pic1.webp"
    },
    {
        address:"Banasree,Dhaka",
        title:"Banasree Villa",
        image:"/image/hero/pic2.webp"
    },
    {
        address:"Nikunjo,Dhaka",
        title:"10 Ways Find Home",
        image:"/image/hero/pic3.webp"
    },
]
export default function NearestHomes() {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
  
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const data = tempData.map((item,index)=>(
      
            <Card
        image={item.image}
        title={item.title}
        address={item.address}
        key={index}
      
        />
        
        
    ))
  return (
    <div className='w-full bg-dark_color py-10'>
<div className='container mx-auto px-5 md:px-0'>
      <span data-aos="fade-up" className='text-xl text-primary_color'>Area Properties</span>
      <h1 data-aos="fade-up" data-aos-delay={500} className='md:text-5xl text-3xl font-bold text-text_color pt-6 leading-[1.3] py-2'>
      Find Your Dream House <br />
      Search By Area
      </h1>
      <div>
        <div className='py-7'>
          <Slider
          {...settings}
          autoplay={true}
          autoplaySpeed={1000}
          
          >
            {data}
          </Slider>
        </div>
      </div>
    </div>
    </div>

    
  )
}
