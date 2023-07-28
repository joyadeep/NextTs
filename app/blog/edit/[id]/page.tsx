"use client"
import Button from '@/components/ui/atoms/Button'
import Input from '@/components/ui/atoms/Input'
import Label from '@/components/ui/atoms/Label'
import TextArea from '@/components/ui/atoms/TextArea'
import FormGroup from '@/components/ui/molecules/FormGroup'
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import {useRouter} from 'next/navigation'

type Props = {}

const fetchSingleBlog=async(id:string)=>{
    const response= await fetch(`http://localhost:3000/api/blog/${id}`);
    const result=await response.json();
    return result.post;
}

const EditBlog = ({params}:{params:{id:string}}) => {
  const [data,setData]=useState({title:'',description:''});
  const router=useRouter();
  useEffect(()=>{
    fetchSingleBlog(params.id).then((res)=>{setData({title:res.title,description:res.description})}).catch((err)=>console.log(err))
  },[]);

  const handleChange=(e:any)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e:any)=>{
    // toast.loading("creating !!")
    e.preventDefault();
      const response=await fetch(`http://localhost:3000/api/blog/${params.id}`,
    {method:"PUT",
    body:JSON.stringify({title:data.title,description:data.description}),
    // @ts-ignore
    "Content-Type":"application/json"
  })
  if (response.status===200){
    toast.success("Blog Updated Successfully !")
    setData({title:'',description:''})
    router.push("/")
    return await response.json();
  }
  else{
    toast.error("Cannot Update Blog !")
  }
  }

  const handleDelete=async(id:string)=>{
    const response= await fetch(`http://localhost:3000/api/blog/${id}`,
    {method:"DELETE",
     // @ts-ignore
    "Content-Type":"application/json"})

    if(response.status===200){
        toast.success("Blog Deleted !")
        router.push("/")
    }

    else {
        toast.error("Cannot Delete Blog !")
    }

  }


  return (
    <div className='px-2 md:p-0'>
      <h2 className='text-3xl text-center font-semibold tracking-tighter'>Edit Blog</h2>
      <form className='w-full md:w-1/2 mx-auto border p-2 rounded-md flex flex-col gap-3'>
        <FormGroup>
          <Label title='Title'/>
          <Input type='text' name='title' value={data.title} handleChange={handleChange}  />
        </FormGroup>
        <FormGroup>
          <Label title='Description' />
          <TextArea  name="description" value={data.description} handleChange={handleChange}  />
        </FormGroup>
      </form>
        <div className='flex justify-center gap-3'>
        <Button type='submit' handleClick={(e)=>handleSubmit(e)} title='Update'/>
        <Button type='button' handleClick={()=>handleDelete(params.id)}  title='Delete' classname='bg-red-500 hover:bg-red-400' />
        </div>
    </div>
  )
}

export default EditBlog