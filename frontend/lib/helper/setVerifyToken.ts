'use server'
import { cookies } from "next/headers";

export async function verifyTokenSet(isEmpty:boolean=false) {
    try {
        (await cookies()).set('verify-token',isEmpty?"":"token")
    } catch (error) {
        
    }
}