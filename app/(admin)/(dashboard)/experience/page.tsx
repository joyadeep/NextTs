"use client"
import React from 'react'
import ExpTable from './exp-table'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/use-modal-store'

type Props = {}

const Experience = (props: Props) => {
  const {onOpen}=useModal()
  return (
    <>
    <div className='text-right pb-3'>
    <Button
    onClick={()=>onOpen('experience',{type:"create"})}
     className='bg-blue-500 text-white hover:bg-blue-500/80 tracking-tight'>Add Experience</Button>
    </div>
    <ExpTable/>
    </>
  )
}

export default Experience