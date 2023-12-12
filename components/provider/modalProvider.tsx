"use client"
import React,{useState,useEffect} from 'react'
import CreateProject from '../modal/createProject';
import CreateIssue from '../modal/createIssue';


const ModalProvider = () => {
  const [isMounted,setIsMounted]=useState(false);
  useEffect(()=>{
    setIsMounted(true);
  },[])

  if (!isMounted){
    console.log('not mounted')
    return null
  }

  return (
    <>
      <CreateProject/> 
      <CreateIssue/>   
    </>
  )
}

export default ModalProvider