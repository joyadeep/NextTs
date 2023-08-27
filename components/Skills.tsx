import Image from 'next/image'
import React from 'react'

type Props = {}
const images =[
  "/images/html.svg",
  "/images/css.svg",
  "/images/javascript.svg",
  "/images/react.svg",
  "/images/next.svg",
  "/images/typescript.svg",
  "/images/tailwind.svg",
  "/images/node.svg",
  "/images/prisma.svg",
  "/images/mongo.svg",
]

const Skills = (props: Props) => {
  return (
    <div className='pt-20 pb-10'>
      {/* <h1 className='text-2xl text-slate-700 font-semibold tracking-tight'>Skills</h1> */}
      <div className='grid grid-cols-4 gap-y-14 place-items-center'>
        {
          images.map((image,index)=>(
            <div key={index} className='relative w-12 h-12'>
          <Image alt='' src={image} fill  title='react' className='drop-shadow-lg '/> 
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills