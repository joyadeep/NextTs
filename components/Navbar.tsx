"use client"
import React from 'react'
import { NavigationMenu, NavigationMenuLink } from './ui/navigation-menu'
import { Button } from './ui/button'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='fixed top-0 z-10 flex justify-between items-center w-full px-5 md:px-20 py-3'>
    <a href='#' className= 'text-3xl font-bold tracking-tighter text-gray-800 w-fit whitespace-nowrap'>Joy-<span className='text-blue-500'>A</span>-deep</a>
<NavigationMenu className='flex gap-4'>
  <NavigationMenuLink className='cursor-pointer'>Works</NavigationMenuLink>
  <NavigationMenuLink className='cursor-pointer'>About</NavigationMenuLink>
  <NavigationMenuLink className='cursor-pointer'>My Services</NavigationMenuLink>
  <Button className='rounded-full bg-inherit text-inherit shadow-none border border-slate-300 text-md'>Get in touch </Button>
</NavigationMenu>
</header>
  )
}

export default Navbar