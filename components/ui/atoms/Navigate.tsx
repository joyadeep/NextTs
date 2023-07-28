import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    title: string;
    link : string;
    classname ?: string;
}

const Navigate = ({title,link,classname}: Props) => {
  return (
    <Link href={`${link}`} className={twMerge('bg-black px-4 py-1 rounded-md text-white hover:bg-slate-600',classname)}>{title}</Link>
  )
}

export default Navigate