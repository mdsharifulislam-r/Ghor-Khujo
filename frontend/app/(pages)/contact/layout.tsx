import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
    title: "Ghor Khujo | Contact",
    description: "Search your dream house",
  };
  
export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
