import React from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {
    type?: "password" | "email" | "text" | "tel";
    classname?:string;
}

const Input = ({type,classname}: Props) => {
  return (
    <input type={type ?? "text"} className={twMerge('border rounded-md outline-none',classname)} />
  )
}

export default Input