"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import {MoveDownRight} from 'lucide-react'
import {motion} from 'framer-motion'

type Props = {}

const Landing = (props: Props) => {
   
  return (
    <div className='w-full min-h-screen px-5 md:px-20 flex  flex-col gap-2 justify-center items-center '>
        <div className='flex  gap-5'>
            <div className='relative w-20 '>
                <motion.div className='absolute w-10 h-10'
                animate={{
                    translateY:[0,30,0]
                }}
                transition={{duration:4,ease:'easeInOut',repeat:Infinity}}
                >
                    <Image src={"/images/mongo.svg"} alt='mongodb' fill  className='drop-shadow-lg' />
                </motion.div>
                <motion.div className='absolute w-10 h-10 bottom-0 right-0' 
                
                animate={{
                    translateY:[0,-30,0],
                    rotate:[180,0]
                }}
                transition={{duration:4,ease:'easeInOut',repeat:Infinity}}
                
                >
                    <Image src={"/images/react.svg"} alt='react' fill  className='drop-shadow-lg' />
                </motion.div>
            </div>

            <div className='relative w-40 h-40'>
            <Image src={"/images/me.jpg"} fill={true}  alt='' className='rounded-full shadow-xl' />
            </div>

            <div className='relative w-20  '>
            <motion.div className='absolute right-0 w-10 h-10 '
                animate={{
                    translateY:[0,-20,0]
                }}
                transition={{duration:4,ease:'easeInOut',repeat:Infinity}}
                >
                    <Image src={"/images/node.svg"} alt='node' fill className='drop-shadow-lg'  />
                </motion.div>
                <motion.div className='absolute bottom-0 w-10 h-10'
                animate={{
                    translateY:[0,20,0]
                }}
                transition={{duration:4,ease:'easeInOut',repeat:Infinity}}
                >
                    <Image src={"/images/tailwind.svg"} alt='tailwind' fill className='drop-shadow-lg'  />
                </motion.div>
            </div>
        </div>
        <div className=' text-center flex flex-col gap-3 pt-4'>
            <div className='flex justify-center text-blue-500 font-semibold text-3xl tracking-tighter '>Hey, I am Joyadeep <motion.p
            className='w-fit'
            animate={{
                rotate:[60,0]
                
            }}
            transition={{repeat:Infinity,type:'spring',repeatDelay:5,duration:0.3}}
            >👋</motion.p> </div>
            <p className='text-2xl font-semibold' >A Frontend Developer with 1+ years of experience</p>
            <p className='text-slate-500 dark:text-slate-300'>I am a skilled frontend developer with expertise in crafting intuitive and visually appealing user interfaces. I thrive on creating seamless user experiences through clean code, innovative designs, and a strong attention to detail.</p>
        </div>
        <Button className='rounded-full shadow-xl text-white  bg-gradient-to-r text-md from-blue-500 to-purple-500 bg px-4 py-2 flex items-center gap-2 ' >See my works <MoveDownRight size={20}/> </Button>
    </div>
  )
}

export default Landing