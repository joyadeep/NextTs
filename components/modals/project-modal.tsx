import { useModal } from '@/hooks/use-modal-store';
import React,{useState} from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface IForm {
    name:string;
    sub:string;
    status:boolean;
    description:string;
}

const ProjectModal = () => {
    const [formState,setFormState]=useState<IForm>({
        name:"",
        description:"",
        sub:"",
        status:false
    })
    const {isOpen,name,onClose,data}=useModal();
    const isModalOpen=isOpen && name==="projects";
    const handleChange=(e:any)=>{
        setFormState({...formState,[e.target.name]:e.target.value});
    }
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='w-full' >
            <DialogHeader>
                <DialogTitle className='capitalize'>Create Project Dialog</DialogTitle>
            </DialogHeader>
            <form  className='grid grid-cols-2 gap-4'>
                <div>
                <Label>Project Name</Label>
                <Input name='orgName'  onChange={handleChange} />
                </div>
                <div>
                <Label>Title</Label>
                <Input name='designation'  onChange={handleChange}/>
                </div>
                <div>
                    <Label>Duration</Label>
                    <Input name='duration' value="" onChange={handleChange} />
                </div>
                <div>
                    <Label>Status</Label>
                    <Input name='status' readOnly value={formState.status===true?"Active":"InActive"}/>
                </div>
                <div className='col-span-2'>
                    <Label>Roles & responsibilities</Label>
                    {/* <EditorText value={ror} onChange={setRor} /> */}
                </div>
                <div className='flex gap-2 col-span-2 justify-end'>
                    <Button className='capitalize text-white bg-blue-500 hover:bg-blue-500/80' >Create</Button>
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default ProjectModal