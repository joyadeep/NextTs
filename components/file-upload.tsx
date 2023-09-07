"use client"
import React from 'react'
import {X} from 'lucide-react'
import Image from 'next/image'
import { UploadDropzone } from '@/lib/uploadthing'
import "@uploadthing/react/styles.css"

type Props = {
    onChange:(url?:string)=>void;
    value:string;
    endpoint:"messageFile" | "serverImage"
}

const FileUpload = ({onChange,endpoint,value}: Props) => {
  
  const fileType=value?.split(".").pop();

  if(value && fileType !=="pdf"){
   return(
    <div className='relative h-20 w-20'>
    <Image fill src={value} alt='' className='rounded-full'/>
    <button type='button' className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm' onClick={()=>{
      onChange("")
    }} ><X className='w-4 h-4' /></button>
  </div>
   )
  }

  return (
    <UploadDropzone endpoint={endpoint} 
    onClientUploadComplete={(res)=>{
        onChange(res?.[0].url);
    }}
    onUploadError={(error:Error)=>{
        console.log(error)
    }}
    />
  )
}

export default FileUpload