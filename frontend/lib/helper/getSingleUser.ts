
export async function getSingleUser(id:number) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/single-user/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        return {}
    }
}