import React from "react";

export default function SelectBox(props:React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>&{title:string;options:string[]}) {
    const optionsArr = props?.options?.map((item,index)=>(
        <option key={index} value={item}>{item}</option>
    ))
  return (
    <div>
      <span className="text-sm block text-primary_color">{props?.title}</span>
      <select
        {...props}
        className="w-full py-3 px-5 bg-white border my-2 text-slate-800"
      >
        {optionsArr}
      </select>
    </div>
  );
}
