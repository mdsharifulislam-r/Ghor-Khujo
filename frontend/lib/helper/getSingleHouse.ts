export async function getSingleHouse(id:string){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/house/single/${id}`)
        const data = await res.json()
        return data?.message?{}:data
    } catch (error) {
        return {}
    }
}