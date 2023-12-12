"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SimpleMDE from "react-simplemde-editor";
import {useForm,Controller} from "react-hook-form";
import axios from 'axios';

import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';


interface IssueForm{
  title:string;
  description:string;
}

const NewIssue = () => {
  const {register,control,handleSubmit}=useForm<IssueForm>();
  const router=useRouter()
  return (
    <form className='max-w-lg space-y-3' onSubmit={handleSubmit(async(data)=>{
     try {
      await axios.post("/api/issues",data)
      router.push("/issues");
     } catch (error) {
      console.log(error)
     }
    })} >
        {/* <form> */}
        <Input type='text' placeholder='Enter new issue' {...register('title')} />
        <Controller name='description' control={control} render={({field})=> <SimpleMDE placeholder='Enter Description' {...field} /> } />
        
        {/* </form> */}
        <Button variant={"primary"}>Create New Issue</Button>
    </form>
  )
}

export default NewIssue