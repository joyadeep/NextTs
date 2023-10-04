import React from 'react';
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import { cn } from '@/lib/utils';
type Props = {
    label:string;
    path:string;
}

const SideLink = ({label,path}: Props) => {
    const pathname=usePathname();
    console.log("pathname ==",pathname)
    return (
        <Link href={path} className={cn("p-2 rounded-md w-full text-left text-md",
        pathname===path && "bg-blue-500 text-white hover:bg-blue-500/80 dark:hover:bg-blue-500/75",
        pathname !== path && "hover:bg-slate-100 dark:hover:bg-slate-500"
        )} >{label}</Link>
  )
}

export default SideLink