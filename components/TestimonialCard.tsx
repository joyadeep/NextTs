import Image from 'next/image'
import React from 'react'
import { Card,CardContent } from './ui/card'
import {Quote} from 'lucide-react'

type Props = {}

const TestimonialCard = (props: Props) => {
  return (
    <Card className='py-5 cursor-pointer hover:shadow-lg' 
    // className='border rounded-md  p-5 flex justify-center flex-col  gap-3 shadow-md hover:shadow-xl cursor-pointer'
    >
        <CardContent>

    <Image src={'/images/me.jpg'} alt='' width={80} height={80} className='rounded-full object-cover mx-auto' />
    {/* <img src={testimonial.image} alt="" className='w-20 h-20 rounded-full mx-auto' /> */}
    <div className='text-center'>
    <h1 className='text-black text-lg font-medium tracking-tight capitalize'>Joyadeep Limbu</h1>
    <h3>Software Engineer | React</h3>
    <h5 className='font-semibold text-slate-600'>dev.joyadeep@gamil.com</h5>
    </div>
    <p className=' tracking-tighter text-slate-500 text-left '>
        <Quote size={24} className='text-blue-500'/>
    joyadeep was one of the hard working employee. he worked with us for around 5 years and we find him energetic
    </p>
        </CardContent>
</Card>
  )
}

export default TestimonialCard