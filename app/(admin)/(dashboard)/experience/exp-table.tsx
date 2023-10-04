import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import ActionTooltip from '@/components/ActionTooltip'
import { MoreVertical, Trash } from 'lucide-react'
type Props = {}

const expList = [
    {
        id:1,
        orgName:"Deerhold Nepal Ltd.",
        designation:"React Developer Fellow",
        duration:"May 2022 - Dec 2022",
        ror:["built and deploy UI","Integrated API","attended daily standup meetings"],
        status:"Active"
    },
    {
        id:2,
        orgName:"goTaxi Nepal Ltd.",
        designation:"Frontend Developer [React] ",
        duration:"Jan 2023 - Present",
        ror:["built and deploy UI","Integrated API","attended daily standup meetings"],
        status:"Active"
    }
  ]

const ExpTable = (props: Props) => {
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
      {expList.map((exp,index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{index+1}</TableCell>
          <TableCell>{exp.orgName}</TableCell>
          <TableCell>{exp.designation}</TableCell>
          <TableCell>{exp.duration}</TableCell>
          <TableCell>{exp?.ror[0]}...</TableCell>
          <TableCell>{exp.status}</TableCell>
          <TableCell className='flex '>
            <ActionTooltip label='Details'>
                <MoreVertical size={20} className='cursor-pointer' />
            </ActionTooltip>
            <ActionTooltip label='Delete'>
                <Trash size={20} className='cursor-pointer' />
            </ActionTooltip>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default ExpTable