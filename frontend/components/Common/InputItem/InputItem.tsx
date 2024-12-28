import React from 'react'

export default function InputItem(props:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>&{label:string,priroty?:string}) {
  return (
    <div className='flex flex-col gap-2 py-1'>
      <label htmlFor={props?.id} className='text-slate-600 pl-3 relative before:absolute before:w-1 before:h-full before:top-0 before:left-0 before:bg-primary_color'>{props?.label} {props?.priroty&& <span className='text-red-600'>*</span>}</label>
      <input {...props} className='px-4 py-1.5 rounded-md focus:outline-none  text-sm border' />
    </div>
  )
}
