import React from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {
    type?:"submit" | "reset" | "button";
    title:string;
    classname?:string;
}

const Button = ({type,title,classname}: Props) => {
  return (
    <button type={type ?? "button"} className={twMerge('bg-black text-white rounded-xl w-fit px-4 py-2',classname)} >{title}</button>
  )
}

export default Button