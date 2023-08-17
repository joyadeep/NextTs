import React from 'react'
import ServiceCard from './ServiceCard'
import {PenTool,Smartphone,Code} from 'lucide-react'

type Props = {}

const Services = (props: Props) => {
  return (
    <div id='services' className='w-full min-h-screen px-5 md:px-20  flex flex-col justify-center items-center gap-20'>
    <h1 className='text-4xl font-bold capitalize tracking-tighter' >My services</h1>
    <div className='flex justify-between flex-col md:flex-row w-full gap-5'>
     <ServiceCard title={"UI/UX design"} description={"I create User-centered interfaces for digital products, applications, and websites to enhance user experience."} icon={<PenTool size={40} className='text-blue-500'/>}  />
     <ServiceCard title={"Prototyping"} description={"Using prototyping services, clients can visualize and test their product's design and functionality."} icon={<Smartphone size={40} className='text-blue-500'/>}  />
     <ServiceCard title={"Frontend development"} description={"In frontend development, I create visual appeal, usability, and accessibility for user interfaces."} icon={<Code size={40} className='text-blue-500'/>}  />
       
   
    </div>
</div>
  )
}

export default Services