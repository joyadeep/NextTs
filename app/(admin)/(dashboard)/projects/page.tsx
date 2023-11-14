"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import ProjectTable from './project-table'
import { useModal } from '@/hooks/use-modal-store'

type Props = {}

const Projects = (props: Props) => {
  const {onOpen}=useModal()
  return (
    <>
      <Button
      onClick={()=>onOpen('projects')}
      className='bg-blue-500 text-white hover:bg-blue-500/80 tracking-tight float-right'>Create New Project</Button>
      <ProjectTable/>
    </>
  )
}

export default Projects