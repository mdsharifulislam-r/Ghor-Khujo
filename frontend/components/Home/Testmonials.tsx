'use client'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import Slider from 'react-slick'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

function Card({image,name}:{image:any,name:string}){
    return(
        <div className='w-full p-6 bg-white shadow-xl border'>
            <div className='flex justify-between'>
            <div className="flex place-items-center gap-3">
                <div className='profile size-16 relative overflow-hidden rounded-full'>
                <Image src={image} className='absolute w-full object-cover h-full top-0 left-0' alt='' width={100} height={100}/>
                </div>
               
                <div>
                    <h1 className='text-xl font-semibold text-text_color'>{name}</h1>
                    <span className='text-sm text-slate-700'>Hr BD Task</span>
                </div>
                </div>
                <div className="star flex text-orange-500">
                    {
                        new Array(5).fill(5).map((item,index)=>(
                            <span key={index}>
                                <FaStar/>
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className="text text-sm text-slate-700 font-light mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, in accusamus illo nemo magni, eaque nostrum ea nam libero porro quod impedit saepe voluptates aut officia, omnis a ex eius.

            </div>
            
        </div>
    )
}

export default function Testmonials() {
    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        
      };
  return (
    <div className='w-full min-h-[80vh] relative mb-11'>
        <div className="absolute w-full h-[60%] bg-[url('/image/hero/pic2.webp')] bg-fixed bg-cover top-0 left-0">
        <div className="absolute w-full h-full top-0 left-0 bg-black/35">

        </div>

        </div>
        <div className="relative w-[80%] mx-auto pt-20">
            <span className='text-xl text-white' data-aos="fade-up" data-aos-delay={500}>Client,s Testimonial</span>
            <h1 data-aos="fade-up" data-aos-delay={700} className='text-white md:text-5xl text-3xl font-bold pt-4 leading-[1.3] drop-shadow-xl'>See What,s Our Client <br />
            Says About Us</h1>
            <div className="py-6">
             <Swiper slidesPerView={2}
             spaceBetween={10}
             loop={true}
             modules={[Autoplay]}
             autoplay={true}
             
             breakpoints={{
                200: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                400: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
             className='pb-5'
             >
                <SwiperSlide>
                    <Card
                    image={'/image/client/client1.webp'}
                    name='Mr Jhon'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    image={'/image/client/client2.webp'}
                    name='Mr Shiab'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    image={'/image/client/client3.webp'}
                    name='Mrs Julia'
                    />
                </SwiperSlide>

             </Swiper>
            </div>
        </div>        
      
    </div>
  )
}
