'use server'
import { ReviewType } from "@/Types/Types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function postReview(body:ReviewType) {
    try {
        const auth = (await cookies()).get('auth-token')?.value
        
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/review/post`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Cookie":`auth-token=${auth}`
            },
            body:JSON.stringify(body),
            credentials:"include"
        })

        const data = await res.json()
       revalidateTag('reviewHouseId')
        return data

    } catch (error) {
        console.log(error);
        
        return {}
    }
}