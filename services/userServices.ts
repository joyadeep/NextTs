import axios from 'axios';
import { NextResponse } from 'next/server';


export const registerUser=async(data:any)=>{
    try {
        const result=await axios.post("/api/register",data);
        return result;
    } catch (error) {
        console.log("error",error);
    }
}

export const loginUser=async(data:any)=>{
    try {
        const result=await axios.post("/api/login",data);
        return result;
    } catch (error) {
        console.log("error",error);
    }
}

export const logout=async()=>{
    try {
        const result=await axios.post("/api/logout");
        console.log("logout res =",result)
        if (result.status===200){
            return result;
        }
    } catch (error) {
        console.log("error",error);
    }
}