import Link from 'next/link'
import React from 'react'
import {Bug} from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
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
        <div className='flex items-center gap-x-2'><Bug className='w-7 h-7'/> <span className='text-blue-600 text-lg font-bold tracking-tight'>Issuee</span></div>
        <div className='flex items-center gap-x-5'>
            {
                navlinks.map((navlink)=>(
                    <Link key={navlink.href} href={navlink.href}>{navlink.label} </Link>
                ))
            }
            <Link href={"/dashboard"}>Logout</Link>
        </div>
    </nav>
  )
}

export default Navbar