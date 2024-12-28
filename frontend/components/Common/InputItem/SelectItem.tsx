import React from 'react'

export default function SelectItem(props:React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>&{options:string[],label:string}) {
    const optionsString = props?.options?.map(item=>(
        <option value={item} key={item}>{item}</option>
    ))
  return (
    <div className='flex flex-col gap-2 py-1 w-full'>
      <label htmlFor={props?.id} className='text-slate-600 pl-3 relative before:absolute before:w-1 before:h-full before:top-0 before:left-0 before:bg-primary_color'>{props?.label}</label>
      <div className='px-3 py-1 border w-full rounded-md'>
        <select {...props} className='w-full bg-white text-slate-600'>
            {optionsString}
        </select>
      </div>
     </div>
  )
}
