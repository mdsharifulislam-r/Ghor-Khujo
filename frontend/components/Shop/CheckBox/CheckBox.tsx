import React from 'react'

export default function CheckBox(props:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>&{label:string}) {
  return (
    <div className='flex place-items-center gap-2 text-base text-slate-800'>
      <input type="checkbox" {...props} className='p-6 accent-primary_color' />
      <label htmlFor={props?.id}>{props?.label}</label>
    </div>
  )
}
