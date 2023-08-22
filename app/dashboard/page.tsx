"use client"
import React, { useEffect } from 'react'
// import {redirect} from 'next/navigation'
import { useRouter } from 'next/navigation'
import isAuth from '@/components/isAuth'

type Props = {}

const Dashboard = (props: Props) => {
    const router=useRouter();
    const status=false
    if(!status)
        router.push("/")
  return (
    <div>Dashboard</div>
  )
}

export default isAuth(Dashboard);