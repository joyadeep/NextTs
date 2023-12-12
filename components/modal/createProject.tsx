"use client"
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { useModal } from '@/hooks/useModal'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Iproject {
    name:string;
    description:string;
}

const CreateProject = () => {

    const {isOpen,type,onClose}=useModal()
    const {register,handleSubmit,reset}=useForm<Iproject>()
    const router=useRouter();
    
    const isModalOpen= isOpen && type==="createProject";

    const close=()=>{
        onClose();
        reset();
    }


    return (
    <Dialog open={isModalOpen} onOpenChange={()=>close()}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create Project</DialogTitle>
                <DialogDescription>Create <span className='text-violet-500'>new</span> project to start tracking <span className='text-red-500'>issues</span> .</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(async(data)=>{
                try {
                    await axios.post("/api/project",data)
                } catch (error) {
                    console.log("error");
                }
            })} >
                <Label>Project Name</Label>
                <Input type='text' {...register('name')} />
                <Label>Description</Label>
                <Input type='text' {...register('description')} />
                <DialogFooter className='mt-3'>
                    <Button variant={"primary"} >Create</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateProject