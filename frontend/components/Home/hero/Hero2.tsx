import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { LuMoveRight } from "react-icons/lu";
export default function Hero2() {
  return (
    <div className='w-full h-screen bg-[url("/image/hero/pic.webp")] relative bg-cover'>
      <div className="aboslute w-full h-full left-0 top-0 bg-gradient-to-r from-black/90  to-transparent">

      </div>
        <div className='w-full h-screen absolute top-0 left-0 flex flex-col justify-center place-items-start md:pl-16 pl-5'>
          <h2 className='flex place-items-center md:text-xl text-base gap-4 text-white'><span className='text-primary_color'><FaHome/></span><span>Welcome to Ghor Khujo</span></h2>
          <h1 className='md:text-6xl text-3xl font-bold text-white text-start my-5 leading-[1.2]'>Find Your Dream <br /> House By Us</h1>
          <p className='text-base font-light mb-4 pl-7 border-l border-l-primary_color text-white lg:w-[40%] md:w-[60%] w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic expedita asperiores accusantium distinctio numquam, illo iste tempora ipsum. Eius, dignissimos.</p>
          <div>
            <Link href={""} className='px-10 flex place-items-center gap-4 py-4 md:text-base text-sm bg-primary_color text-white hover:bg-white hover:text-black transition-all duration-500 relative before:absolute before:bg-white before:w-full before:h-full before:left-0 before:top-0 before:-z-[1]'>
            <span>Explore Now</span>
            <span><LuMoveRight/></span>
            </Link>
          </div>
        </div>
    </div>
  )
}
