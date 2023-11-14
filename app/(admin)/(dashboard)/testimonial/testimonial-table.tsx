"use client"
import Loading from '@/components/Loading'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useToast } from '@/components/ui/use-toast'
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
  const {toast}=useToast();
  useEffect(()=>{
    setIsLoading(true);
    axios.get("/api/testimonial").then((res)=>{
      setTestimonilaData(res.data.result)
    }).finally(()=>setIsLoading(false))
  },[])

  const handleChange=(testimonial:Itestimonial)=>{
    setIsLoading(true);
    axios.patch(`/api/testimonial/${testimonial.id}`).then((res)=>{
      if (res.status===200){
        toast({title:"Success",description:"Testimonial toggled Successfully !"})
        const updatedTestimonials = testimonialData.map(testimonial => {
          if (testimonial.id === res.data.result.id) {
            return {
              ...testimonial,
              status:!testimonial.status
            };
          } else {
            return testimonial;
          }
        });
        setTestimonilaData(updatedTestimonials);
      }
          }).catch((error)=>{
            console.log(error);
            toast({variant:'destructive',title:"Failed",description:"Testimonial toggle failed !"})
          })
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