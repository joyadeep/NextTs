"use client"
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'
import React from 'react'

type Props = {}

const projects=[
    {
        id:1,
        name:"Portfilio",
        sub:"portfilio website built with next 13 and mongodb",
        status:false,
        description:"<p>this is test description</p>"
    }
]

const ProjectTable = (props: Props) => {
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead>#</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>image</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Description</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {projects.map((project,index) => (
        <TableRow>
          <TableCell className="font-medium">{index+1}</TableCell>
          <TableCell>
            <div className='w-10 h-10 relative'>
                {/* <Image src={testimonial?.image} alt='people' fill className='rounded-full object-cover' /> */}
            </div>
          </TableCell>
          <TableCell className='whitespace-nowrap'>{project.name}</TableCell>
          <TableCell className='whitespace-nowrap'>{project.sub}</TableCell>
          <TableCell className='flex '>
                <Switch />
          </TableCell>
        </TableRow>
       ))
       } 
    </TableBody>
  </Table>
  )
}

export default ProjectTable