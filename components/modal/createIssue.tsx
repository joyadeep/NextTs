"use client"
import { useModal } from '@/hooks/useModal'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {}

const CreateIssue = (props: Props) => {
    const {isOpen,onClose,type}=useModal()

    const isModalOpen=isOpen && type==="createIssue";
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose} >
       <DialogContent>
       <DialogHeader>
            <DialogTitle>Create Issue</DialogTitle>
            <DialogDescription>Open new issue.</DialogDescription>
        </DialogHeader>
        <form>
                <Label>Issue Name</Label>
                <Input type='text' />
                <DialogFooter className='mt-3'>
                    <Button variant={"primary"} >Create</Button>
                </DialogFooter>
            </form>
        </DialogContent> 

    </Dialog>
    
  )
}

export default CreateIssue