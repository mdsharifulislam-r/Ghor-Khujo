import { getReviewByHouseId } from '@/lib/helper/getReviewsUsingHouseId';
import { HomeType } from '@/Types/Types';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
type Props = {
    params: any
    
  }
  
  export async function generateMetadata(
    { params }: Props,
  
  ): Promise<Metadata> {
  const par = await params
  const id = par?.id
 console.log(id);
 
   const house:HomeType = await getReviewByHouseId(id)
   console.log(house);
   
    return {
      title: "Ghorkhjo | Homes | "+house?.title,
     
    }
  }
export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
