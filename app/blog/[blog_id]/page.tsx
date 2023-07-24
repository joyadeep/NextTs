"use client"
import React from 'react'
import { useParams } from 'next/navigation'

type Props = {}

const page = (props: Props) => {

    const {blog_id}=useParams();
  return (
    <div className='h-screen flex items-center justify-center'>
       
        <h2 className='font-bold text-3xl'>Single blog :{blog_id}</h2>

    </div>
  )
}

export default page