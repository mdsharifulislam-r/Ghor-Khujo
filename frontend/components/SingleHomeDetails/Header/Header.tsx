"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

function Header({image,sideImages}:{image:string,sideImages:string}) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };
  const imageArr = sideImages?[image,...(sideImages.split(","))]:[image]
  const imageItems = imageArr?.map((item,index)=>(
    <Image src={item} alt="" key={index} width={2000} height={2000} className="w-[80%] cursor-pointer hover:scale-105 transition-all duration-300  object-cover h-[60vh]" />
  ))
  return (
    <div className="slider-container overflow-x-hidden">
        <div className="w-full h-60 bg-slate-100 flex justify-center flex-col place-items-center">
            <h1 className="text-4xl text-slate-600">Home Details</h1>
            <div>Homes {">"} Home Details</div>
        </div>
     {sideImages? <Slider {...settings}>
       
        {imageItems}
      </Slider>:<Image src={image||""} alt=""  width={2000} height={2000} className="w-full cursor-pointer hover:scale-105 transition-all duration-300  object-cover h-[60vh]" />}
    </div>
  );
}

export default Header;
