"use server"
import { cookies } from "next/headers"

export async function loginUser(body:any,isSocial:boolean=false) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/${isSocial?"social-login":"login"}`,{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(body),
            credentials:"include"
          })

          
          const data = await res.json()
          if(data?.token){
            const awar=  (await cookies()).set('auth-token',data.token)
          }
        
          return data
    } catch (error) {
        return {}
    }
}