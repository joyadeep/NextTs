import { NextRequest, NextResponse } from "next/server";

export const POST=async(req:NextRequest,res:NextResponse)=>{
    try {
        // req.cookies.set('adminToken','',)
        NextResponse.json({message:"logged out successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"couldnot logout",error},{status:500})
    }
}