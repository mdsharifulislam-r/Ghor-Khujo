import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
    title: "Ghor Khujo | Login",
    description: "Search your dream house",
  };
  
export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
