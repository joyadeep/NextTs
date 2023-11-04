import { prisma, startServer, stopServer } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const POST=async(req:Request,res:NextResponse)=>{
    try {
        startServer();
        const {email,password}=await req.json();
        const user=await prisma.user.findFirst({
            where:{
                email
            }
        })
        if (!user){
            return NextResponse.json({message:"Cannot find user"},{status:404})
        }
        // compare password
        const verifiedPassword= bcrypt.compareSync(password,user.password);
        if (!verifiedPassword){
            return NextResponse.json({message:"Invalid email or password"},{status:401})
        }

        // generate token
        // @ts-ignore
        const token=jwt.sign({id:user.id,email:user.email},process.env.JWT_KEY)
        const response=NextResponse.json({
            message:"user logged in successfully",
            data:{id:user.id,username:user.username,email:user.email}
        },{status:200})
        response.cookies.set("adminToken",token,{expires: new Date(Date.now() +  2 * 60 * 60 * 1000),httpOnly:true});
        return response;
    } catch (error) {
        return NextResponse.json({message:"USER_GET_ERROR"},{status:500});
    } finally {
        stopServer();
    }
}