import { UserType } from "@/Types/Types";
import { getStorLocal, setStorLocal } from "../hooks/localHooks";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { logoutUserServer } from "../helper/logoutUser";


interface initialvalue{
    user:UserType|null,
    showFilter:boolean,
    showDashboard:boolean
}

const localUser:UserType|null = getStorLocal("user")

const initialValue:initialvalue={
    user:localUser,
    showFilter:false,
    showDashboard:false
}

const userSlice = createSlice({
    initialState:initialValue,
    name:"User",
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
            setStorLocal("user",action.payload)
        },
        logoutUser:(state)=>{
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,{
                method:"DELETE",
                credentials:"include"
            }).then(res=>res.json())
            .then( async data=>{
                if(data.status){
                toast.success(data.message)
                await logoutUserServer()
                }else{
                    toast.error(data.message)
                }
            })
            state.user=null
            setStorLocal("user",null)
        },
        setShowFilter:(state)=>{
            state.showFilter=!state.showFilter
            
        },
        setShowDashboard:(state)=>{
            state.showDashboard=!state.showDashboard
            
        }
    }
})

export const {setUser,logoutUser,setShowFilter,setShowDashboard} = userSlice.actions
export default userSlice