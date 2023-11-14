"use client"
import React from 'react'
import {useRouter} from 'next/navigation'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
import { ModeToggle } from './ModeToggle'
import SideLink from './SideLink'
import { Button } from './ui/button'
import { logout } from '@/services/userServices'
type Props = {}

const Sidebar = (props: Props) => {
    const router=useRouter();
    const sidebarItems=[
        {
            path:"/experience",
            label:"Experience"
        },
        {
            path:"/projects",
            label:"Projects"
        },
        {
            path:"/testimonial",
            label:"Testimonial"
        }
    ]

    const handleLogout=async()=>{
        try {
            const res=await logout();
            if(res?.status===200){
                router.push("/auth");
                router.refresh();
            }
        } catch (error) {
            console.log("error",error);
        }
    }

  return (
    <ScrollArea className="h-screen flex w-60 rounded-md border px-2 py-1">
        <h1 className='text-center text-3xl font-bold tracking-tight'>Dashboard<span className='text-4xl text-orange-500'>.</span></h1>
        <Separator className='mt-2'/>
        <ModeToggle/>
        <div className='flex flex-col gap-1'>
        {
            sidebarItems.map((item)=>(
                <SideLink key={item.path} label={item.label} path={item.path} />
            ))
        }
        </div>
        <Button className="w-full text-right mt-5" onClick={()=>{handleLogout()}}>Logout</Button>
    </ScrollArea>
  )
}

export default Sidebar