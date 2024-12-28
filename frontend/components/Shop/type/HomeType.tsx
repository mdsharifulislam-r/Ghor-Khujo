'use client'
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

export default function HomeType({setFor}:{setFor:Dispatch<SetStateAction<string>>}) {
    const [str,setStr]=useState<string[]>([])

    const func = (e:ChangeEvent<HTMLInputElement>)=>{
        const name = e.target.name

        if(!str.includes(name)){
            str.push(name)
        }else{
            setStr(()=>str.filter(item=>item!==name))
        }
    }

    
    
  return (
    <div className="md:py-3" onMouseLeave={()=>setFor(str.toString())}>
      <CheckBox label="Flat" id="flat" name="flat" onChange={func} />

      <CheckBox label="Sublet" id="sublet" name="sublet"  onChange={func} />

      <CheckBox label="Any" id="any2" name="any"  onChange={func} />      
    </div>
  );
}
