import { cookies } from "next/headers";

export async function getHomeByUserId() {
    try {
        const token = (await cookies()).get('auth-token')?.value
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/house/user`,{
            credentials:'include',
            headers:{
                "Cookie":`auth-token=${token}`
            }
        
        })
        const data = await res.json()
        return data?.length?data:[]
    } catch (error) {
        return []
    }
}