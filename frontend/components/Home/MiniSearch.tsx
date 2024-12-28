import React from 'react'

export default function MiniSearch() {
  return (
    <div className='w-full min-h-[30vh] flex justify-center container mx-auto '>
      <form action="" className='flex place-items-center md:w-[80%] w-[90%] rounded-md md:gap-6 gap-2 md:px-11 px-3 text-xs -translate-y-20 h-[150px] bg-white border shadow-xl'>
        <select name="divition"  id="" className='w-full text-slate-700 md:px-6 px-2 text-xs py-4 bg-white border'>
            <option value="" className='text-slate-700 accent-primary_color'>Devition</option>
            <option value="" className='text-slate-700'>Select Devition</option>
        </select>
        <select name="divition"  id="" className='w-full text-slate-700 md:px-6 px-2 py-4 bg-white border'>
            <option value="" className='text-slate-700 accent-primary_color'>Devition</option>
            <option value="" className='text-slate-700'>Select Devition</option>
        </select>
        <select name="divition"  id="" className='w-full text-slate-700 md:px-6 px-2 py-4 bg-white border'>
            <option value="" className='text-slate-700 accent-primary_color'>Devition</option>
            <option value="" className='text-slate-700'> Devition</option>
        </select>

        <div className='w-full'>
            <button className='px-10 py-3 hover:bg-white hover:text-primary_color transition-all duration-500 hover:border hover:border-primary_color  bg-primary_color text-white'>Search</button>
        </div>
      </form>
    </div>
  )
}
