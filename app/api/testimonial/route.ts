import {prisma,startServer} from '@/lib/db'
import { NextResponse } from 'next/server';
export const GET=async(req:Request,res:NextResponse)=>{
try {
    startServer()
    const result = await prisma.testimonial.findMany();
    if(!result)
        return NextResponse.json({
            message:"no data found !"
        },{status:404})
    return NextResponse.json({
        message:"success",
        result
    },{status:200})
} catch (error) {
    return NextResponse.json({message:"Something went wrong"},{status:500})
} finally {
    prisma.$disconnect();
}
}

export const POST=async(req:Request,res:NextResponse)=>{
    try {
        startServer();
        const data=await req.json();
        const result=await prisma.testimonial.create({
            data:data
        })
        if(!result)
            return NextResponse.json({message:"Cannot create testimonial"},{status:400})
        return NextResponse.json({message:"Testimonial created successfully"},{status:201})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
    finally {
        prisma.$disconnect();
    }
}