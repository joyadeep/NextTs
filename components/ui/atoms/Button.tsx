import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
    title:string;
    classname?:string;
    type:"button"|"submit"|"reset";
    handleClick?:React.MouseEventHandler<HTMLButtonElement> | undefined;
    
}

const Button = ({title,classname,type,handleClick}: Props) => {
  return (
    <button type={type} onClick={handleClick} className={twMerge('rounded-md px-6 mx-auto py-2 bg-blue-500 hover:bg-blue-400 tet-xl w-fit text-white',classname)}>{title}</button>
  )
}

export default Button