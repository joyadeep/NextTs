import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import Link from 'next/link'

type Props = {
    id:number;
    title:string;
    image:string;
    description:string;
    tags:string[];
    link:string;
}
interface Iproject {
    project:Props;
}

const ProjectCard = ({project}: Iproject) => {
  return (
    <Card  className='w-full  overflow-hidden cursor-pointer hover:shadow-lg dark:border-slate-500 dark:hover:shadow-slate-600'>
       <Link href={project.link} target='_blank'>
        <CardContent className='px-0 '>
            <div className='relative h-44'>
            <Image src={project.image} alt='' fill className='object-cover' />
            </div>
            <div className='p-2'>
                <h4 className='text-lg tracking-tight font-semibold'>{project.title}</h4>
                <p className='text-sm mt-1'>
                    {project.description}
                </p>
                <div className='flex gap-2 flex-wrap mt-4'>
                    {
                        project.tags.map((tag,index)=>(
                            <Badge key={index} variant={'outline'}># {tag}</Badge>
                        ))
                    }
                   
                </div>
            </div>
        </CardContent>
        </Link>
    </Card>
  )
}

export default ProjectCard