import Link from 'next/link'
import React from 'react'
import {Github,Linkedin} from 'lucide-react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='about' className='min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center  md:justify-between px-5 md:px-20 gap-5'>
    <div className='flex flex-col gap-5'>
        <h1 className='text-4xl tracking-tight font-bold'>My name is Joyadeep. I'm a frontend developer working and living in Kathmandu.</h1>
        <p className='text-slate-500'>I was born in Taplejung and studied BSc. CSIT at ACHS in Kathmandu. I have worked in different firms as a Frontend Developer.</p>
        
        <div className=' flex gap-5'>
          <Link href={"https://www.linkedin.com/in/zoysince1997/"} target='_blank'>
            <Linkedin size={24}  className='text-slate-500 hover:text-black cursor-pointer'/>
          </Link>
          <Link href={"https://github.com/joyadeep"} target='_blank' >
            <Github size={24} className='text-slate-500 hover:text-black  cursor-pointer'  />
          </Link>
        </div>
    </div>
    <div className='relative hidden md:block md:w-1/2 h-1/2' >
        <Image src={"/images/me.jpg"} className='object-cover rounded-xl shadow-2xl' style={{borderRadius: "50% 50% 50% 50% / 30% 60% 40% 60%"}} alt='' fill />
    </div>
    {/* <img src={me} alt='' className='w-full md:w-1/3 h-full md:h-2/3 rounded-xl object-cover ' style={{borderRadius: "50% 50% 50% 50% / 30% 60% 40% 60%"}} /> */}
</div>
  )
}

export default About