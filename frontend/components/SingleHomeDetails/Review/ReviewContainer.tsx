import React from 'react'
import { ReviewCard } from '../Reviews'
import { ReviewType } from '@/Types/Types'
import { getReviewByHouseId } from '@/lib/helper/getReviewsUsingHouseId'

export default async function ReviewContainer({reviews}:{reviews:ReviewType[]}) {

  
  const reviewsData = reviews?.map(data=>(
    <ReviewCard review={data} key={data?.review_id}/>
  ))
  
  return (
    <div className='w-full'>
      {reviewsData}
    </div>
  )
}
