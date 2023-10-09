import { prisma, startServer,stopServer } from "@/lib/db";
import { NextResponse } from "next/server";

startServer();

export const GET=async(req:Request,res:NextResponse)=>{
    try {
        const result=await prisma.experience.findMany();
        if (result.length === 0){
            return NextResponse.json({message:"Experience list is empty"},{status:404})
        }
        return NextResponse.json({result},{status:200})
    } catch (error) {
        return NextResponse.json({message:"GET_EXPERIENCE_ERROR"},{status:500});
    } finally {
        stopServer();
    }
}

export const POST=async(req:Request)=>{
    try {
        const data=await req.json();
        console.log("data====",data)
        if (!data.orgName || !data.designation || !data.duration){
            return NextResponse.json({message:"All fields required"},{status:400})
        }
        const result=await prisma.experience.create({data})
        if (!result) {
            return NextResponse.json({message:"exp not added"},{status:401})
        }
        return NextResponse.json({result})
    } catch (error) {
        return NextResponse.json({message:"POST_EXPERIENCE_ERROR"},{status:500})
    } finally {
        stopServer();
    }
}