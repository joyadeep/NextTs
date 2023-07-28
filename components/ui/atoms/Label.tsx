import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
    title:string;
    classname?:string;
}

const Label = ({title,classname}: Props) => {
  return (
    <label className={twMerge('text-slate-500 ',classname)} htmlFor={title}>{title}</label>
  )
}

export default Label