import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import ProjectCard from './ProjectCard'

type Props = {}

const projects=[
  {
    id:1,
    title:"Portfolio Website",
    image:"/images/portfolio.png",
    description:"Portfolio website to showcase my skills,works and achievements.",
    tags:["React","Typescript","Tailwind CSS","Prisma","Mongodb"],
    category:"fullstack",
    link:"https://joyadeep.com.np",
    github:"https://github.com"
  },
  {
    id:2,
    title:"Bestdealnepal",
    image:"/images/bestdealnepal.png",
    description:"Bestdealnepal is ecommerce website with fakestore API integration. Also integrated Khalti for payment. ",
    tags:["React","Tailwind CSS","Fake Store API","Khalti"],
    category:"frontend",
    link:"https://bestdealnepal.netlify.app",
    github:"https://github.com"
  },
  {
    id:3,
    title:"Trippy",
    image:"/images/triphop.png",
    description:"Trippy is prototype of traval agency website that includes various information of agency like recent trips,services provided.",
    tags:["React","Tailwind CSS","Typescript"],
    category:"frontend",
    link:"https://triphop.netlify.app",
    github:"https://github.com"
  },
  {
    id:4,
    title:"Pendect",
    image:"/images/pendect.png",
    description:"Pendect is a URL shortner web app using third-party API from RapdiAPI.",
    tags:["React","Tailwind CSS","Typescript"],
    category:"frontend",
    link:"https://pendect.netlify.app",
    github:"https://github.com"
  },

]

const Projects = (props: Props) => {
 const frontend=projects.filter((project)=>project.category==="frontend");
 const fullstack=projects.filter((project)=>project.category==="fullstack");
  return (
    <div id='works' className='min-h-fit md:min-h-screen px-5 md:px-20 pt-20 pb-10'>
        <h1 className='text-4xl font-bold capitalize tracking-tighter text-center mb-5 ' >My works</h1>
        <Tabs defaultValue="all" >
      <TabsList className="grid w-full md:w-1/2 mx-auto grid-cols-3 mb-5">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="fullstack">FullStack</TabsTrigger>
      </TabsList>
      <TabsContent value='all' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5'>
        {
          projects?.map((project)=>(
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </TabsContent>
      <TabsContent value='frontend' className='flex gap-4 flex-wrap'>
      {
          frontend?.map((project)=>(
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </TabsContent>
      <TabsContent value='fullstack' className='flex gap-4 flex-wrap'>
      {
          fullstack?.map((project)=>(
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </TabsContent>
      </Tabs>
    </div>
  )
}

export default Projects