import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getStorLocal } from "./lib/hooks/localHooks";

const paths = ['/login','/register',"/verify/:path*","/dashboard/:path*"]
export async function middleware(Request:NextRequest) {
    try {
       const path = Request.nextUrl.pathname
       const auth = (await cookies()).get("auth-token")?.value
       const verifyToken = (await cookies()).get("verify-token")?.value
      
    
     console.log(auth);
     
       
       if(paths.includes(path) && auth){
        return NextResponse.redirect(new URL("/",Request.url))
       }

       if(path.includes("verify")&&!verifyToken){
        return NextResponse.redirect(new URL("/register",Request.url))
       }

       return NextResponse.next()
       
        
    } catch (error) {
        
    }
}

export const config = {
    matcher:['/login','/register',"/verify/:path*"]
}