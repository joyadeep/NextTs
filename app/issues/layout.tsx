import Project from '@/components/project'
import React, { ReactNode } from 'react'


const IssueLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex gap-x-3 '>
        <Project/>
        <div className='w-full'>
        {children}
        </div>

    </div>
  )
}

export default IssueLayout