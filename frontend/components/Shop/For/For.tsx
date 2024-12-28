'use client'
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

export default function For({setFor}:{setFor:Dispatch<SetStateAction<string>>}) {
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
      <CheckBox label="Family" id="family" name="family" onChange={func} />

      <CheckBox label="Bachlor" id="bachlor" name="bachlor"  onChange={func} />

      <CheckBox label="Any" id="any" name="any"  onChange={func} />      
    </div>
  );
}
