"use client"
import Button from '@/components/ui/atoms/Button'
import Input from '@/components/ui/atoms/Input'
import Label from '@/components/ui/atoms/Label'
import TextArea from '@/components/ui/atoms/TextArea'
import FormGroup from '@/components/ui/molecules/FormGroup'
import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { useRouter } from 'next/navigation'

type Props = {}

const page = (props: Props) => {
  const router=useRouter();
  const [data,setData]=useState({title:'',description:''});

  const handleChange=(e:any)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    console.log("clicked add post")
    const response=await fetch("http://localhost:3000/api/blog",
    {method:"POST",
    body:JSON.stringify({title:data.title,description:data.description}),
    // @ts-ignore
    "Content-Type":"application/json"
  })
  if (response.status===201){
    toast.success("Blog Created Successfully !")
    setData({title:'',description:''})
    router.push('/')
    return await response.json();
  }
  else{
    toast.error("Cannot Create Blog !")
  }
  }

  return (
    <div className='px-2 md:p-0'>
      <h2 className='text-3xl text-center font-semibold tracking-tighter'>Add Blog</h2>
      <form onSubmit={handleSubmit} className='w-full md:w-1/2 mx-auto border p-2 rounded-md flex flex-col gap-3'>
        <FormGroup>
          <Label title='Title'/>
          <Input type='text' name='title' value={data.title} handleChange={handleChange}  />
        </FormGroup>
        <FormGroup>
          <Label title='Description' />
          <TextArea  name="description" value={data.description} handleChange={handleChange}  />
        </FormGroup>
        <Button type='submit' title='Create' classname='w-full md:w-fit'/>
      </form>
    </div>
  )
}

export default page