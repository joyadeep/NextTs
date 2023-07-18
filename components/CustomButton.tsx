"use client"
import { ICustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title,styles,handleClick,btnType}:ICustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`px-4 py-2 ${styles}`}
        onClick={()=>{console.log("clicked")}}
    >
        <span className={`flex-1`} >
            {title}
        </span>
    </button>
  )
}

export default CustomButton