import Image from 'next/image'
import React from 'react'
import ActionTooltip from './ActionTooltip'

type Props = {}
const images =[
  {label:"HTML",image:"/images/html.svg"},
  {label:"CSS",image:"/images/css.svg"},
  {label:"javascript",image:"/images/javascript.svg"},
  {label:"React",image:"/images/react.svg"},
  {label:"Next",image:"/images/next.svg"},
  {label:"Typescript",image:"/images/typescript.svg"},
  {label:"Tailwind",image:"/images/tailwind.svg"},
  {label:"Node.js",image:"/images/node.svg"},
  {label:"Prisma",image:"/images/prisma.svg"},
  {label:"MongoDB",image:"/images/mongo.svg"}
]

const Skills = (props: Props) => {
  return (
    <div className='pt-20 pb-10'>
      <div className='grid grid-cols-4 gap-y-14 place-items-center'>
        {
          images.map((image,index)=>(
            <div key={index} className='relative w-12 h-12 cursor-pointer'>
         <ActionTooltip label={image.label} align='center' side='top'>
          <Image alt='' src={image.image} fill className='drop-shadow-lg '/> 
         </ActionTooltip>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills