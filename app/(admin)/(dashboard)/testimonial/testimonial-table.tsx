"use client"
import ActionTooltip from '@/components/ActionTooltip'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type Props = {}
interface Itestimonial{
  id:string;
  name:string;
  email:string;
  designation:string;
  image:string;
  message:string;
  status:boolean;
}

const TestimonialTable = (props: Props) => {
  const [testimonialData,setTestimonilaData]=useState<Itestimonial[]>([]);
  useEffect(()=>{
    axios.get("/api/testimonial").then((res)=>{
      setTestimonilaData(res.data.result)
    })
  },[])

  const handleChange=(testimonial:Itestimonial)=>{
    // console.log("testimonial=",testimonial)
    axios.patch(`/api/testimonial/${testimonial.id}`).then((res)=>{
      console.log("success",res)
      if (res.status===200){
        const updatedData=testimonialData.filter((data)=>{
          if(data.id===res.data.result.id){
            return res.data.result
          }
          return data
        })
        console.log("updated DATA ==",updatedData)
      }
    }).catch((error)=>console.log(error))
  }

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
      {testimonialData.map((testimonial,index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{index+1}</TableCell>
          <TableCell>
            <div className='w-10 h-10 relative'>
                <Image src={testimonial?.image} alt='people' fill className='rounded-full object-cover' />
            </div>
          </TableCell>
          <TableCell className='whitespace-nowrap'>{testimonial.name}</TableCell>
          <TableCell className='whitespace-nowrap'>{testimonial.designation}</TableCell>
          <TableCell>{testimonial.message}</TableCell>
          {/* <TableCell>{testimonial.status}</TableCell> */}
          <TableCell className='flex '>
            {/* <ActionTooltip side='top' label='Details'> */}
                {/* <MoreVertical onClick={()=>{}} size={20} className='cursor-pointer' /> */}
                {/* <Switch value={testimonial.status?"Active":"InActive"} checked={testimonial.status} className={cn(testimonial.status? "bg-blue-500 dark:text-white" : "bg-slate-200")} /> */}
                <Switch checked={testimonial.status} onClick={()=>handleChange(testimonial)} />
            {/* </ActionTooltip> */}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default TestimonialTable