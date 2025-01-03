'use server'
import { cookies } from "next/headers";

export async function logoutUserServer() {
    try {
        (await cookies()).set('auth-token',"")
    } catch (error) {
        
    }
}