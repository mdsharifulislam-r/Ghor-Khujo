'use server'

import { cookies } from "next/headers"

export async function getAuthToken() {
    const authToken = (await cookies()).get('auth-token')?.value
    return authToken

}