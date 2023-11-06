"use client"
import Loading from '@/components/Loading'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
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
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    setIsLoading(true);
    axios.get("/api/testimonial").then((res)=>{
      setTestimonilaData(res.data.result)
    }).finally(()=>setIsLoading(false))
  },[])

  const handleChange=(testimonial:Itestimonial)=>{
    setIsLoading(true);
    axios.patch(`/api/testimonial/${testimonial.id}`).then((res)=>{
      console.log("success",res)
      if (res.status===200){
        testimonialData.filter((data)=>{
          if(data.id===res.data.result.id){
            return res.data.result
          }
          return data
        })
      }
    }).catch((error)=>console.log(error))
    .finally(()=>{setIsLoading(false)})
  }

  if (isLoading) {
    return <Loading/>
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
          <TableCell className='flex '>
                <Switch checked={testimonial.status} onClick={()=>handleChange(testimonial)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default TestimonialTable