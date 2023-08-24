"use client"
import React from 'react'
import { NavigationMenu, NavigationMenuLink } from './ui/navigation-menu'
import { Button } from './ui/button'
import {MoveDownRight} from 'lucide-react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='fixed bg-white top-0 z-10 flex justify-between items-center w-full px-5 md:px-20 py-3'>
      <a href='#' className= 'text-3xl font-bold tracking-tighter text-gray-800 w-fit whitespace-nowrap'>Joy-<span className='text-blue-500'>A</span>-deep</a>
      <NavigationMenu className=' gap-4 hidden md:flex'>
      <NavigationMenuLink href='#works' className='cursor-pointer'>Works</NavigationMenuLink>
      <NavigationMenuLink href='#about' className='cursor-pointer'>About</NavigationMenuLink>
      <NavigationMenuLink href='#services' className='cursor-pointer'>My Services</NavigationMenuLink>
      <NavigationMenuLink href='#contact' className='flex px-2 py-1 items-center cursor-pointer rounded-full bg-inherit text-inherit shadow-none border border-slate-300 text-md font-normal hover:bg-slate-100 '>Get in touch <MoveDownRight size={16} className='ml-1' /></NavigationMenuLink>
      {/* <Button className='rounded-full bg-inherit text-inherit shadow-none border border-slate-300 text-md font-normal hover:bg-slate-100 '>Get in touch <MoveDownRight size={16} className='ml-1' /></Button> */}
      </NavigationMenu>
  </header>
  )
}

export default Navbar