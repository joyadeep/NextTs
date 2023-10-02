"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'


type Props = {}

const Auth = (props: Props) => {
    const [data,setData]=useState({email:'',password:''})
    
    const handleChange=(e:any)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log("form data===",data)
        // const resp=await adminLogin(data);
        // console.log("login response ==",resp)
        // if(resp?.status===200){
            // localStorage.setItem("admin_token",resp.data.token);
            // navigate("/dashboard");
        }
    
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Card className='w-1/3 py-3 dark:border dark:border-slate-500'>
            <CardContent>
        <h1 className='text-4xl font-bold text-center tracking-tight text-slate-600 dark:text-white'>Login<span className='text-red-500'>.</span></h1>
        <form onSubmit={handleSubmit} className='text-left flex flex-col gap-5'>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' name='email' value={data.email} onChange={handleChange} />
            </div>
            <div>
                <Label htmlFor='password'>Password</Label>
                <Input type='password' name='password' value={data.password} onChange={handleChange} />
            </div>
            <Button type='submit' className='bg-blue-500 hover:bg-blue-500/90 text-lg dark:text-white' >Sign In</Button>
            {/* <Button type='submit' title='Sign in' classname='w-full text-xl font-semibold' /> */}
        </form>
</CardContent>
        </Card>
</div>
  )
}

export default Auth