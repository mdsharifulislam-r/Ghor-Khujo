import Link from 'next/link'
import React from 'react'
import ProfileButton from './ProfileButton/ProfileButton'
import SmallNavbar from './SmallNavbar'

export default function Navbar() {
  const links = [
    {
      link:"/homes",
      text:"Homes"
    },
    {
      link:"/blogs",
      text:"Blogs"
    },
    {
      link:"/contact",
      text:"Contact"
    },
  ].map((link,index)=>(
    <Link className='hover:text-primary_color transition-all duration-500 py-2 relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-500 before:h-1 before:bottom-0 before:left-0 before:bg-primary_color' key={index} href={link.link}>{link.text}</Link>
  ))
  return (
    <>
    <div className='w-full sticky md:block hidden top-0 z-30 bg-white py-7 shadow-lg'>
      <div className="container mx-auto flex justify-between place-items-center">
        <div className="logo">
          <h1 className='text-4xl font-bold text-text_color'>Logo</h1>
        </div>
        <div className="links flex gap-4 text-lg text-text_color font-medium">
          {links}
         
        </div>
        <ProfileButton/>
      </div>
    </div>
  <SmallNavbar
  links={links}
  />
    </>
    
  )
}
