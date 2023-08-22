"use client"
import React, { useEffect } from 'react'
// import {redirect} from 'next/navigation'
import { useRouter } from 'next/navigation'
import isAuth from '@/components/isAuth'

type Props = {}

const Dashboard = (props: Props) => {
    const router=useRouter();
    if(!localStorage.getItem("newToken"))
        router.push("/")
  return (
    <div>Dashboard</div>
  )
}

export default isAuth(Dashboard);