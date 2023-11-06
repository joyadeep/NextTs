import { NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers"

export const POST=async(req:NextRequest,res:NextResponse)=>{
    try {
        cookies().set("adminToken",'',{expires: new Date(Date.now() -1),httpOnly:false})
        return NextResponse.json({message:"logged out successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"couldnot logout",error},{status:500})
    }
}