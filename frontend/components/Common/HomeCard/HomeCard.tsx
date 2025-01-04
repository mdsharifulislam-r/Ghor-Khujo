'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosResize } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HomeType } from "@/Types/Types";
import { getSingleUser } from "@/lib/helper/getSingleUser";
import { motion } from "motion/react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { setFavarite } from "@/lib/features/user.reducer";
import { FaHeart } from "react-icons/fa";
export default function HomeCard({home}:{home:HomeType}) {
  const [user,setUser]=useState<{name:string,image:string}>({name:"",image:""}
   
  )
  useEffect(()=>{
    getSingleUser(home?.user_id||0)
      .then(data=>{
        if(data?.name){
          setUser(data)
        }
      })
  },[])

  const dispatch = useAppDispatch()
  const favarite = useAppSelector(state=>state.userReducer.favarite)
  console.log('render');
  
  const func = () =>{
    dispatch(setFavarite(home))
   
  }
  const exist = favarite.some(item=>item.house_id==home?.house_id)
  return (
    <motion.div initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} transition={{duration:0.3}} className="w-full cursor-pointer flex group md:gap-5 gap-2 shadow-lg md:p-6 p-3 overflow-hidden border">
      <div className="imageBox relative lg:w-[40%]  md:h-60 h-50 md:w-1/2 w-[30%] overflow-hidden">
        <Image
          src={home?.image||""}
          className="absolute group-hover:scale-105 transition-all duration-500 w-full h-full top-0 left-0 object-cover"
          alt=""
          width={300}
          height={300}
        />
      </div>
      <div className="text w-[60%] text-wrap">
        <Link href={`/single/${home?.house_id}`} className="flex justify-between place-items-center">
          <span className="text-primary_color md:text-base text-xs">For Rent</span>
          <span className="md:text-xl text-sm font-bold text-primary_color">
            ${home?.rent}/Month
          </span>
        </Link>
        <Link href={`/single/${home?.house_id}`} className="md:text-3xl text-xl font-semibold transition-all duration-500 hover:text-primary_color text-text_color py-2">
          {home?.title}
        </Link>
        <div className="loc flex place-items-center gap-2 pt-3">
          <span className="text-primary_color">
            <FaLocationDot />
          </span>
          <Link href={`/single/${home?.house_id}`} className="text-slate-600 text-[10px] text-wrap "> {home.address}</Link>
        </div>
        <div className="flex place-items-center md:text-base text-xs gap-10 text-slate-600 md:py-3 py-1 pl-1">
          <span>For : {home?.for}</span>
          <span>Home Type:{home.type}</span>
        </div>
        <div className="flex place-items-center justify-between pt-3">
          <div className="flex place-items-center flex-col md:flex-row gap-3">
            <div className="profile md:size-16 size-10 relative overflow-hidden rounded-full">
              <Image
                src={user?.image||"/image/client/client1.webp"}
                className="absolute w-full object-cover h-full top-0 left-0"
                alt=""
                width={100}
                height={100}
              />
            </div>

            <div>
              <h1 className="md:text-xl text-xs font-semibold text-text_color">
                {user?.name}
              </h1>
              <span className="text-[10px] text-slate-700">Hr BD Task</span>
            </div>
          </div>
          <div className="flex place-items-center gap-3">
            <button className="p-2 text-xl bg-slate-100 text-slate-400">
              <IoIosResize />
            </button>
            <button onClick={func} className="p-2 text-xl bg-slate-100 text-slate-400">
              {!exist?<span><CiHeart /></span>
              :<span className=" text-primary_color"><FaHeart/></span>}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
