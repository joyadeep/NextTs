"use client"
import React,{useState,useEffect} from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import ActionTooltip from '@/components/ActionTooltip'
import { MoreVertical, Trash } from 'lucide-react'
import { useModal } from '@/hooks/use-modal-store'
import axios from 'axios'
import Loading from '@/components/Loading'
type Props = {
  id:string;
  orgName:string;
  designation:string;
  duration:string;
  ror:string;
  status:boolean;
}

const ExpTable = () => {
  const [formState,setFormState]=useState<Props[]>([]);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
    setIsLoading(true);
    axios.get("/api/experience").then((res)=>setFormState(res.data.result))
    .finally(()=>setIsLoading(false))
  },[])
  const {onOpen}=useModal();
  if (isLoading) {
    return <Loading/>
  }
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead>#</TableHead>
        <TableHead>Firm Name</TableHead>
        <TableHead>Designation</TableHead>
        <TableHead>Duration</TableHead>
        <TableHead>Roles and Responsibilities</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {formState?.map((exp,index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{index+1}</TableCell>
          <TableCell>{exp?.orgName}</TableCell>
          <TableCell>{exp?.designation}</TableCell>
          <TableCell>{exp?.duration}</TableCell>
          <TableCell><div dangerouslySetInnerHTML={{ __html: exp?.ror }} /></TableCell>
          <TableCell>{exp?.status===true?"Active":"InActive"}</TableCell>
          <TableCell className='flex '>
            <ActionTooltip side='top' label='Details'>
                <MoreVertical onClick={()=>onOpen('experience',{type:'detail'}) } size={20} className='cursor-pointer' />
            </ActionTooltip>
            <ActionTooltip side='top' label='Delete'>
                <Trash onClick={()=>onOpen('experience',{type:'delete'})} size={20} className='cursor-pointer' />
            </ActionTooltip>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default ExpTable