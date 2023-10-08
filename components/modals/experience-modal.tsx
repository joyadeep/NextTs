"use client"
import React,{useState} from 'react'
import { Dialog,DialogContent,DialogHeader,DialogTitle } from '../ui/dialog'
import { useModal } from '@/hooks/use-modal-store'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import dynamic from 'next/dynamic'
// import TextEditor from '../TextEditor'
export const EditorText=dynamic(()=>import("../TextEditor"),{ssr:false})

interface Iform {
    orgName:string;
    designation:string;
    duration:string;
    ror:string[];
}


const ExperienceModal = () => {
    // const {formData,setFormData}=useState<Iform>({orgName:"",designation:"",duration:"",ror:[]})
    const {isOpen,name,onClose,data}=useModal();
    const {type}=data;
    const isModalOpen=isOpen && name==="experience";

    const handleSubmit=(e:any)=>{
        e.preventDefault()
    }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='w-full' >
            <DialogHeader>
                <DialogTitle className='capitalize'>{type} Experience Dialog</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
                <div>
                <Label>Firm Name</Label>
                <Input/>
                </div>
                <div>
                <Label>Designation</Label>
                <Input/>
                </div>
                <div>
                    <Label>Duration</Label>
                    <Input/>
                </div>
                <div>
                    <Label>Status</Label>
                    <Input/>
                </div>
                <div className='col-span-2'>
                    <Label>Roles & responsibilities</Label>
                    {/* <TextEditor holder="editor" /> */}
                    <EditorText holder="editor" />
                </div>
                <div className='flex gap-2 col-span-2 justify-end'>
                    <Button className='capitalize text-white bg-blue-500 hover:bg-blue-500/80' >{type}</Button>
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default ExperienceModal