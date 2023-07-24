import Image from 'next/image';
import React from 'react'
import {twMerge} from 'tailwind-merge'
type Props = {
    classname?:string;
}

const PostCard = ({classname}: Props) => {
  return (
    <div className={twMerge('w-full rounded-md cursor-pointer hover:shadow-lg border border-slate-300 overflow-hidden p-2 flex flex-col gap-2',classname)}>
        <div className='relative w-full h-40 rounded-sm overflow-hidden'>
            <Image alt='' src="/images/trippy.png" fill={true} />
        </div>
        <h1 className='text-black font-semibold text-xl'>Learn React.JS with examples.</h1>
        <p className='text-slate-500'>
            This course is for absolute beginners who wants to land a job as frontend developer. In this course, you wll be learning React fundamentals and some beautiful projects.
        </p>
    </div>
  )
}

export default PostCard