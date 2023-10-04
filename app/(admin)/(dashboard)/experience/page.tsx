import React from 'react'
import ExpTable from './exp-table'
import { Button } from '@/components/ui/button'

type Props = {}

const Experience = (props: Props) => {
  return (
    <>
    <div className='text-right pb-3'>
    <Button className='bg-blue-500 text-white hover:bg-blue-500/80 tracking-tight'>Add Experience</Button>
    </div>
    <ExpTable/>
    </>
  )
}

export default Experience