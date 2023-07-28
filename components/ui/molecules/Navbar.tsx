import React from 'react'
import Navigate from '../atoms/Navigate'

type Props = {
    
}

const Navbar = (props: Props) => {
  return (
    <nav className='fixed w-full z-10 flex justify-between items-center backdrop-blur-sm px-5 md:px-20 py-2 '>
        <h1 className='text-3xl  font-bold tracking-tighter'>BlogApp</h1>
        <Navigate title='Add Blog' link='/blog/add' />
    </nav>
  )
}

export default Navbar