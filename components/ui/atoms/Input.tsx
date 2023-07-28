import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
    type:"text" | "email" |"password";
    name:string;
    value:string;
    handleChange:React.ChangeEventHandler<HTMLInputElement> | undefined;
    classname?:string;
}

const Input = ({type,name,value,handleChange,classname}: Props) => {
  return (
    <input type={type} name={name} value={value} onChange={handleChange} className={twMerge('rounded-md pl-3 py-2 outline-none border w-full text-lg ',classname)} />
  )
}

export default Input