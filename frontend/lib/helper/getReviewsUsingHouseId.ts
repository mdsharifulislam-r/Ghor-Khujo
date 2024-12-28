export async function getReviewByHouseId(house_id:number) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/review/${house_id}`,{
            next:{
                tags:['reviewHouseId']
            }
        })
        const data = await res.json()
        return data?.length?data:[]
    } catch (error) {
        return []
    }
}