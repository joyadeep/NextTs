"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginUser } from '@/services/userServices'
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import Loading from '@/components/Loading'


type Props = {}

const Auth = () => {
    const [data,setData]=useState({email:'',password:''})
    const [isSubmitting,setIsSubmitting]=useState(false);
    const router=useRouter();
    
    const handleChange=(e:any)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await loginUser(data);
            router.push("/experience")
        } catch (error) {
          console.log("error",error)  
        }  finally {
            setIsSubmitting(false)
        }  
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
            <Button type='submit' disabled={isSubmitting} className='bg-blue-500 hover:bg-blue-500/90 text-lg dark:text-white' >{isSubmitting?<Loading size={32}/>:"Sign In"}</Button>
        </form>
</CardContent>
        </Card>
</div>
  )
}

export default Auth