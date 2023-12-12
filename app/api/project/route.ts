import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";


const createProjectSchema=z.object({
    name:z.string().min(1).max(20),
    description:z.string().min(1),
})


export async function POST(request:NextRequest){
    const body=await request.json();

    if(!body){
        return NextResponse.json({message:"Fields cannot be empty"},{status:400})
    }

    const validation=createProjectSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.format(),{status:400})
    const newProject=await prisma.project.create({
        data:{
            name:body.name,
            description:body.description
        }
    })

    return NextResponse.json(newProject,{status:201});

}

export async function GET(){
    try {
        const result=await prisma.project.findMany();

        if(!result){
            return NextResponse.json("No projects found",{status:404})
        }
        return NextResponse.json(result,{status:200})

    } catch (error) {
        console.log("error",error);
    }
}