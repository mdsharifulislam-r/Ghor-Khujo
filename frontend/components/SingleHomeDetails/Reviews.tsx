import React from 'react'
import { SimpleTitle } from './SideBar'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Image from 'next/image';
import ReviewContainer from './Review/ReviewContainer';
import ReviewForm from './Review/ReviewForm';
import { ReviewType, UserType } from '@/Types/Types';
import { getSingleUser } from '@/lib/helper/getSingleUser';
import { getReviewByHouseId } from '@/lib/helper/getReviewsUsingHouseId';

export function StarMaker({star}:{star:string}){
    const isFloor = star.includes(".") && star!='5.0'
    const regStarAm = isFloor ?4-Math.floor(parseInt(star)):5-Math.floor(parseInt(star))
    
    const stars = new Array(Math.floor(parseInt(star))).fill("4").map((_,index)=>(<FaStar key={index}/>))
    const regStar = new Array(regStarAm).fill("4").map((_,index)=>(<FaRegStar key={index}/>))
    return (
        <div className='flex text-yellow-500'>
            {stars}
            {isFloor?<FaRegStarHalfStroke/>:""}
            {regStar}
        </div>
    )
}

export function calculateAvarage(reviews:ReviewType[]){

  if(reviews?.length){
    let sum = 0

    reviews.forEach(item=>sum+=item.star)

    return (sum/reviews?.length).toFixed(1)
  }
}

export default async function Reviews({house_id}:{house_id:number}) {
  const reviews:ReviewType[] = await getReviewByHouseId(house_id)
  const avarageStar = calculateAvarage(reviews)
  return (
    <div className=''>
      <SimpleTitle text='Cusomers Reviews'/>
      <div className='mt-5 text-sm flex place-items-center gap-4'>
      <StarMaker star={avarageStar?.toString()||"0"}/>
      ({reviews?.length} Reviews)({avarageStar})
      </div>
      <ReviewContainer reviews={reviews}/>
      <ReviewForm house_id={house_id}/>
    </div>
  )
}


export async function ReviewCard({review}:{review:ReviewType}){
  const user:UserType = await getSingleUser(review?.user_id||0)

  return (
    <div className='w-full px-4 py-8 border-b flex gap-2 place-items-center my-3'>
      <Image src={user?.image||"/image/avtar/avtar.png"} alt='' className=' size-24 object-cover rounded-full' width={200} height={200} />
      <div className='flex-grow'>

        <div className='flex justify-between w-full'>
        <div>
        <h1 className='text-xl mb-2'>{user?.name}</h1>
        <div>
          <StarMaker star={review?.star.toString()}/>
        </div>
        </div>
        <span className='px-3 py-2 text-slate-600 border rounded-full h-fit'>{review?.date}</span>
        </div>
       <p className='mt-2 text-slate-600'>{review?.message}</p>
        
      </div>
    </div>
  )
}