"use client"
import React,{useState,useEffect} from 'react'
import ExperienceModal from '../modals/experience-modal';
import ProjectModal from '../modals/project-modal';

type Props = {}

const ModalProvider = (props: Props) => {
    const [isMounted,setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if (!isMounted) {
        return null;
    }
  return (
    <>
        <ExperienceModal/>
        <ProjectModal/>
        
    </>
  )
}

export default ModalProvider