import {prisma,startServer} from '@/lib/db'
import { NextResponse } from 'next/server';
export const GET=async(req:Request,res:NextResponse)=>{
try {
    startServer()
    const result = await prisma.testimonial.findMany();
    console.log("testimonials ==",result)
    if(!result)
        return NextResponse.json({
            message:"no data found !"
        },{status:404})
    return NextResponse.json({
        message:"success",
        result
    },{status:200})
} catch (error) {
    console.log("error",error);
} finally {
    prisma.$disconnect();
}
}