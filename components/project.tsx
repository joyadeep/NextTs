"use client"
import React,{useState,useEffect} from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useModal } from '@/hooks/useModal'
import axios from 'axios'


const Project = () => {
    const pathname=usePathname()
    const [projects,setProjects]=useState([])
    const {onOpen}=useModal();
    useEffect(()=>{
        axios.get("/api/project").then((res)=>{
            setProjects(res.data)
        })
    },[])
    const projectss = [
        {
            name:"goTaxi",
            href:"/issues/1"
        },
        {
            name:"Portfolio",
            href:"/issues/portfolio"
        }
    ]
  return (
    <div className='border rounded-md w-[350px] p-4 bg-slate-50' >
        <div className='flex items-center justify-between mb-3'>
        <h3 className='text-xl font-semibold '>Projects</h3>
        <Button variant={"primary"} size={"sm"} onClick={()=>onOpen("createProject")} >Create Project</Button>
        </div>
        <Separator />
        {
            (!projectss ||projectss?.length<1) && <div className='text-slate-500 pt-3'>No project found. Create one to start tracking <span className='text-red-600'>issues</span> and <span className='text-red-500'>bugs</span></div>
        }
        {
            projectss?.map((project)=>(
                <Link href={project.href} key={project.href} className={cn("block my-2 rounded-md pl-4 py-1 hover:bg-purple-400/30",project.href===pathname && "text-white  bg-purple-400 ")} >
                    {project.name}
                </Link>
            ))
        }
    </div>
  )
}

export default Project