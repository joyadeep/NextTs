import { prisma, startServer, stopServer } from "@/lib/db";
import { useParams } from "next/navigation"
import { NextResponse } from "next/server"

startServer();
export const PATCH=async(req:Request,{params}:{params:{testimonialId:string}})=>{
    try {
        const id=params.testimonialId;
       
        console.log("url ==",id)
        if (!id){
            return NextResponse.json({message:"Cannot find testimonial Id"},{status:400})
        }
        const res=await prisma.testimonial.findFirst({
            where:{
                id
            }
        });
        console.log("single data===",res);
        const result=await prisma.testimonial.update({
            where:{
                id
            },
            data:{
                status:!res?.status
            }
        })
        console.log("updated data =",result);
       
        return NextResponse.json({message:"success",result},{status:200});
        
    } catch (error) {
        return NextResponse.json({message:"PATCH TESTIMONIAL ERROR",error},{status:500})
    } finally {
        stopServer();
    }
}