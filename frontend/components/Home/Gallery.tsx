import Image from 'next/image'
import React from 'react'
import Title from '../Common/Header/Title'

function Card({image,city,count,index}:{image:any,city:string,count:number,index:number}){
    return (
        <div data-aos="fade-up" data-aos-delay={index} className='w-full group h-80 relative flex justify-center place-items-center overflow-hidden'>
            <div className="absolute w-full h-full top-0 left-0">
            <Image src={image} alt='' width={300} height={300} className='absolute group-hover:scale-110 transition-all duration-500 object-cover w-full h-full top-0 left-0'/>
            <div className="absolute w-full h-full bg-black/40 top-0 left-0">

            </div>
            </div>
           <div className="relative flex flex-col justify-center place-items-center gap-3">
            <h1 className='text-white lg:text-5xl md:text-4xl text-3xl uppercase font-bold'>{city}</h1>
            <span className='text-white'>{count} Homes</span>
            <button className='px-6 py-2 bg-primary_color text-white'>Explore</button>
           </div>
        </div>
    )
}

function Card2({image,city,count}:{image:any,city:string,count:number}){
    return (
        <div className='w-full group lg:col-span-2 h-80 relative flex justify-center place-items-center overflow-hidden'>
            <div className="absolute w-full h-full top-0 left-0">
            <Image src={image} alt='' width={300} height={300} className='absolute group-hover:scale-110 transition-all duration-500 object-cover w-full h-full top-0 left-0'/>
            <div className="absolute w-full h-full bg-black/40 top-0 left-0">

            </div>
            </div>
           <div className="relative flex flex-col justify-center place-items-center gap-3">
            <h1 className='text-white  lg:text-5xl md:text-4xl text-3xl uppercase font-bold'>{city}</h1>
            <span className='text-white'>{count} Homes</span>
            <button className='px-6 py-2 bg-primary_color text-white'>Explore</button>
           </div>
        </div>
    )
}
export default function Gallery() {
    const city= [
        {
            image:"/image/hero/pic.webp",
            city:"Dhaka",
            count:2000
        },
        {
            image:"/image/hero/pic1.webp",
            city:"Cumilla",
            count:1000
        },
        {
            image:"/image/hero/pic2.webp",
            city:"Dinajpur",
            count:500
        },
        {
            image:"/image/hero/pic3.webp",
            city:"Rangpur",
            count:2000
        },
      
        
    ]

    const showCity = city.map((item,index)=>(
        <Card
        image={item.image}
        city={item.city}
        count={item.count}
        key={index}
        index={index*100}
        />
    ))
  return (
    <div className='w-full pb-10'>
        <Title
        subtitle='Citys'
        title='Home In every City'
        />
        <div className="container pt-8 mx-auto md:grid-cols-2 grid-cols-1  grid lg:grid-cols-3 gap-3 px-5 md:px-0">
            <Card2
            image={'/image/hero/pic3.webp'}
            city='Bangladesh'
            count={10000}
            />
            {showCity}
        </div>
      
    </div>
  )
}
