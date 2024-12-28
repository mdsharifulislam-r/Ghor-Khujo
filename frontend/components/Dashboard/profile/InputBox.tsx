import React from 'react'

export default function InputBox(props:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>&{label?:string,error?:string}) {
  return (
    <div className='w-full'>
      <label htmlFor={props?.id} className='text-slate-500 py-2'>{props?.label}</label>
      <input {...props} className='w-full py-3 px-4 border focus:outline-none' />
      <span className='text-xs text-red-500'>{props?.error}</span>
    </div>
  )
}
