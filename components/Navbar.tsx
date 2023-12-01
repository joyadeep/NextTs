"use client"
import Link from 'next/link'
import React from 'react'
import {Bug} from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

type Props = {}

const Navbar = (props: Props) => {

    const pathname=usePathname();

    const navlinks=[
        {
            label:"Dashboard",
            href:"/dashboard"
        },
        {
            label:"Issues",
            href:"/issues"
        }
    ]
  return (
    <nav className='w-full flex justify-between px-10 py-4  border-b'>
        <Link href={"/"} className='flex items-center gap-x-2'><Bug className='w-7 h-7'/> <span className='text-blue-600 text-lg font-bold tracking-tight'>Issuee</span></Link>
        <div className='flex items-center gap-x-5'>
            {
                navlinks.map((navlink)=>(
                    <Link key={navlink.href} href={navlink.href}
                    className={cn("hover:text-blue-700/60 text-lg",pathname === navlink.href && "text-blue-700")}
                    >{navlink.label} </Link>
                ))
            }
            <Link href={"/dashboard"} className='text-lg' >Logout</Link>
        </div>
    </nav>
  )
}

export default Navbar