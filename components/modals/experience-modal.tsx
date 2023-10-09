"use client"
import React,{useState} from 'react'
import { Dialog,DialogContent,DialogHeader,DialogTitle } from '../ui/dialog'
import { useModal } from '@/hooks/use-modal-store'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import dynamic from 'next/dynamic'
// import Editor from '../Editor'
import axios from 'axios'
export const EditorText=dynamic(()=>import("../Editor"),{ssr:false})

interface IForm {
    orgName:string;
    designation:string;
    status:boolean;
    duration:string;
}


const ExperienceModal = () => {
    const [formState, setFormState] = useState<IForm>({
        orgName: '',
        designation: '',
        duration: '',
        status:false
      });
    const [ror,setRor]=useState("");
    const {isOpen,name,onClose,data}=useModal();
    const {type}=data;
    const isModalOpen=isOpen && name==="experience";

    const handleChange=(e:any)=>{
        setFormState({...formState,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        const data={...formState,ror:ror}
        console.log("final ==",data)
        axios.post("/api/experience",data).then((res)=>{
            console.log("success",res)
        })
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
                <Input name='orgName' value={formState.orgName} onChange={handleChange} />
                </div>
                <div>
                <Label>Designation</Label>
                <Input name='designation' value={formState.designation} onChange={handleChange}/>
                </div>
                <div>
                    <Label>Duration</Label>
                    <Input name='duration' value={formState.duration} onChange={handleChange} />
                </div>
                <div>
                    <Label>Status</Label>
                    <Input name='status' readOnly value={formState.status===true?"Active":"InActive"}/>
                </div>
                <div className='col-span-2'>
                    <Label>Roles & responsibilities</Label>
                    <EditorText value={ror} onChange={setRor} />
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