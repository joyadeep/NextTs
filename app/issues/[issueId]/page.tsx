"use client"
import { issueStatus } from '@/constants/IssueConstant';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import React from 'react'
import { useModal } from '@/hooks/useModal';

interface IssueIdPageProps {
    params:{
        issueId:string;
    }
}

const IssueId = ({params}:IssueIdPageProps) => {
  const {onOpen}=useModal();
  return (
    <div>
    <Button variant="primary" className='float-right' onClick={()=>onOpen('createIssue')}>
      Create New Issue
    </Button>
    <Table className='mt-3'>
      <TableHeader className='bg-slate-300'>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Updated</TableHead>
          <TableHead>Action</TableHead>

        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>goTaxi</TableCell>
          <TableCell>{issueStatus["OPEN"]}</TableCell>
          <TableCell>2023/12/10</TableCell>
          <TableCell>2023/12/12</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Portfolio</TableCell>
          <TableCell>{issueStatus["CLOSE"]}</TableCell>
          <TableCell>2023/12/10</TableCell>
          <TableCell>2023/12/12</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>goTaxi</TableCell>
          <TableCell>{issueStatus["IN_PROGRESS"]}</TableCell>
          <TableCell>2023/12/10</TableCell>
          <TableCell>2023/12/12</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  )
}

export default IssueId