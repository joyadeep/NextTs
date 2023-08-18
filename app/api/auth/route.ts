import { NextResponse } from "next/server"

export const POST=async(req:Request,res:Response)=>{
    try {
        // const body=await req.json();
        // const {email,password}=
    } catch (error) {
        console.log("error",error)
    }
}

export const GET=async(req:Request,res:Response)=>{
    try {
        return NextResponse.json({
            message:"working fine!"
        },{status:200})
    } catch (error) {
        console.log("error",error)
    }
}