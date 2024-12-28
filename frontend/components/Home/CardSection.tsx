import React from "react";
import Title from "../Common/Header/Title";
import { FaArrowRight, FaClock, FaHome, FaLocationArrow } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";

function Card({icon,title,index}:{icon:any,title:string,index:number}) {
  return (
    <div data-aos="fade-up" data-aos-delay={index} className="w-full flex flex-col min-h-60 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-500 before:h-1 before:bg-primary_color before:bottom-0 before:left-0  justify-center place-items-center p-6 border shadow-xl">
      <div className="icon py-12">
        <span className="text-4xl block rounded-md p-5 bg-primary_color text-white">
        {icon}
        </span>
        
      </div>
      <h1 className="text-3xl text-text_color font-bold pb-3">{title}</h1>
      <p className="text-center font-light text-sm text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, non!
        Rem nihil, fuga autem inventore atque nostrum quam eligendi at?
      </p>
      <div>
        <button className="flex text-primary_color place-items-center gap-3 py-3">
            <span>Rent a Home</span>
            <span><FaArrowRight/></span>
        </button>
      </div>
    </div>
  );
}
export default function CardSection() {
  return (
    <div className="w-full container mx-auto pb-10">
      <Title subtitle="Our Services" title="Our Main Focus" />
      <div className="w-full  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5 gap-8 px-5 md:px-0">
        <Card index={500} icon={<FaHome/>} title="Rent Your Home"/>
        <Card index={1000} icon={<FaLocationArrow/>} title="Find Your Home"/>
        <Card index={1500} icon={<FaClock/>} title="Save Your Time"/>
      </div>
    </div>
  );
}
