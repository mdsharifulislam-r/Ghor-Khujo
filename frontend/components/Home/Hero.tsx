'use client'
import React from 'react'
import Hero1 from './hero/Hero1'
import Hero2 from './hero/Hero2'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
function PrevArrow({className,style,onClick}:{className?:string,style?:any,onClick?:()=>void}){
  return (
    <div className='absolute right-0 top-0 h-full flex justify-center place-items-center'>
 <button onClick={onClick} className='p-5 mr-20 border-2 hover:bg-primary_color transition-all duration-500 border-white text-white relative left-10 top-9'>
      <FaArrowRight/>
    </button>
    </div>
   
  )
}

function NextArrow({className,style,onClick}:{className?:string,style?:any,onClick?:()=>void}){
  return (
    <div className='absolute left-0 bottom-0 h-full flex justify-center place-items-center'>
 <button onClick={onClick} className='md:p-5 p-3 mr-20 border-2 hover:bg-primary_color transition-all duration-500 border-white text-white relative left-10 top-9'>
      <FaArrowRight/>
    </button>
    </div>
   
  )
}
export default function Hero() {
  const settings = {
    
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow:<PrevArrow/>,
    prevArrow:<NextArrow/>
  };
  return (
    <div className='relative'>
      <Slider {...settings}>
        <Hero1/>
        <Hero2/>
      </Slider>
    </div>
  )
}
