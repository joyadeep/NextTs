import { prisma, startServer, stopServer } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

// Register user
export const POST=async(req:Request,res:NextResponse)=>{
    try {
        startServer();
        const {username,email,password}=await req.json();
        console.log(`name= ${username} email=${email} password= ${password}`);
        const hashedPassword=bcrypt.hashSync(password,10);
        console.log("hashedPassword ==",hashedPassword);
        const result=await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })
        return NextResponse.json({result},{status:201});
    } catch (error) {
        return NextResponse.json({message:"USER_CREATE_ERROR"},{status:500});
    }
    finally{
        stopServer();
    }
}