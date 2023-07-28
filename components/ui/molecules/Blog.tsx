import React from 'react'
import { twMerge } from 'tailwind-merge'
import Navigate from '../atoms/Navigate';



type Props = {
  classname?:string;
  blog:any;
}

const Blog = ({classname,blog}: Props) => {
  return (
    <div className={twMerge('bg-slate-100 rounded-md p-5 flex flex-col gap-1',classname)}>
      <div className='flex justify-between items-start gap-5 '>
        <p className='text-xl text-black font-medium'>{blog.title}</p>
        <Navigate title='Edit' link={`/blog/edit/${blog.id}`}  />
      </div>
      <div className='text-slate-500 text-sm '>{new Date(blog.date).toDateString()}</div>
      <p>{blog.description}</p>
    </div>
  )
}

export default Blog