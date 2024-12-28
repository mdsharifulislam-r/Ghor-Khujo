export interface UserType{
    name:string;
    email:string;
    phone:string;
    image?:string;
    address:string
}

export interface HomeType{
    house_name:string,
    title:string,
    for:string,
    type:string,
    address:string,
    desc:string,
    rent:number,
    phone:string;
    tags:string[],
    capacity?:string;
    owner_name?:string;
    image:string;
    side_images:string,
    publishDate:string,
    user_id?:number,
    house_id?:number,
    description?:string
}


export interface ReviewType{
    user_id?:number,
    review_id?:number;
    house_id:number;
    star:number;
    message:string;
    date:string
}