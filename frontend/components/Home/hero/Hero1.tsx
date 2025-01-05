import { motion } from 'motion/react';
import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { LuMoveRight } from "react-icons/lu";

export default function Hero1() {
  return (
    <div className='w-full h-screen bg-[url("/image/hero/pic3.webp")] relative bg-cover'>
      <div className="aboslute w-full h-full left-0 top-0 bg-gradient-to-r from-black/90  to-transparent">

      </div>
        <div className='w-full h-screen absolute top-0 left-0 flex flex-col justify-center place-items-center'>
          <motion.div initial={{y:20,opacity:0}} exit={{y:20,opacity:0}} transition={{duration:0.5,delay:1}} whileInView={{y:0,opacity:1}} className='flex place-items-center md:text-xl text-sm gap-4 text-white'><span className='text-primary_color'><FaHome/></span><span>Welcome to Ghor Khujo</span></motion.div>
          <h1 data-aos="fade-up" className='md:text-6xl text-3xl font-bold text-white text-center my-5 leading-[1.2]'>Find Your Dream <br /> House By Us</h1>

          <div data-aos="fade-up" data-aos-delay={5}>
            <Link href={""}   className='px-10 flex md:text-base text-sm place-items-center gap-4 py-4 bg-primary_color text-white hover:bg-white hover:text-black transition-all duration-500 relative before:absolute before:bg-white before:w-full before:h-full before:left-0 before:top-0 before:-z-[1]'>
            <span>Explore Now</span>
            <span><LuMoveRight/></span>
            </Link>
          </div>
        </div>
    </div>
  )
}
