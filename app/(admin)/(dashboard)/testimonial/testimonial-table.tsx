"use client"
import ActionTooltip from '@/components/ActionTooltip'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {}

const testimonialList=[
    {
        name:"ram ram",
        imageUrl:"https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        designation:"software engineer",
        message:"test message",
        status:"Active"
    },
    {
        name:"shyam shyam",
        imageUrl:"https://images.pexels.com/photos/18384304/pexels-photo-18384304/free-photo-of-man-in-t-shirt-and-eyeglasses-in-park-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        designation:"software engineer",
        message:"test message",
        status:"InActive"
    }
]

const TestimonialTable = (props: Props) => {
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead>#</TableHead>
        <TableHead>image</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Designation</TableHead>
        <TableHead>Message</TableHead>
        <TableHead>Status</TableHead>
        {/* <TableHead>Actions</TableHead> */}
      </TableRow>
    </TableHeader>
    <TableBody>
      {testimonialList.map((testimonial,index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{index+1}</TableCell>
          <TableCell>
            <div className='w-10 h-10 relative'>
                <Image src={testimonial?.imageUrl} alt='people' fill className='rounded-full object-cover' />
            </div>
          </TableCell>
          <TableCell>{testimonial.name}</TableCell>
          <TableCell>{testimonial.designation}</TableCell>
          <TableCell>{testimonial.message}</TableCell>
          {/* <TableCell>{testimonial.status}</TableCell> */}
          <TableCell className='flex '>
            <ActionTooltip side='top' label='Details'>
                {/* <MoreVertical onClick={()=>{}} size={20} className='cursor-pointer' /> */}
                <Switch value={testimonial.status} checked={testimonial.status==="Active"} className={cn(testimonial.status==="Active" ? "bg-blue-500 dark:text-white" : "bg-slate-200")} />
            </ActionTooltip>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default TestimonialTable