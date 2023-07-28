import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    classname?:string;
    name?:string;
    value?:string;
    handleChange?:React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}


const TextArea = ({classname,value,name,handleChange}: Props) => {
  return (
    <textarea  rows={7} value={value} name={name} onChange={handleChange} className={twMerge('rounded-md pl-3 py-2 outline-none border w-full text-lg resize-none',classname)} />
  )
}

export default TextArea