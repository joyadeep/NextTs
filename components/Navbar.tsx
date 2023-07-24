import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='fixed z-10 w-full h-14 px-20 py-2 flex items-center justify-between bg-white/30 backdrop-blur-sm'>
        <h4 className='text-4xl font-bold tracking-tighter' >Navbar</h4>
        <div className='flex items-center gap-3'>
            <Link href={"/"} >Home</Link>
            <Link href={"/about"} >About</Link>
        </div>
    </div>
  )
}

export default Navbar