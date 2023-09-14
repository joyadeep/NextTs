"use client"
import React, { useState } from 'react'
import { Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle } from '../ui/dialog'
import { useModal } from '@/hooks/use-modal-store'
import { Button } from '../ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'


const DeleteServerModal
 = () => {
    const {isOpen,onClose,type,data}=useModal();
    const [isLoading,setIsLoading]=useState(false);
    const router=useRouter();

    const isModalOpen=isOpen && type==="deleteServer";
    const {server}=data;

    const onClick=async()=>{
      try {
        setIsLoading(true)
        await axios.delete(`/api/servers/${server?.id}`);
        onClose();
        router.refresh();
        router.push("/")
      } catch (error) {
        console.log("error",error)
      } finally {
        setIsLoading(false)
      }
    }
   
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className='bg-white text-black p-0'>
            <DialogHeader className='pt-8 px-6'>
                <DialogTitle className='text-2xl text-center font-bold'>Delete Server</DialogTitle>
            <DialogDescription className='text-center text-zinc-500'>
              Are you sure you want to do this ? <br/> 
              <span className='font-semibold text-indigo-500'>{server?.name}</span> will be premanently deleted.
            </DialogDescription>
            </DialogHeader>
        <DialogFooter className='bg-gray-100 px-6 py-4'>
            <div className='flex items-center justify-between w-full'>
              <Button disabled={isLoading} onClick={onClose} variant={'ghost'}>
                Cancel
              </Button>
              <Button disabled={isLoading} variant={'primary'} onClick={onClick}>
                Confirm
              </Button>
            </div>
        </DialogFooter>
        </DialogContent>
    </Dialog>
    
  )
}

export default DeleteServerModal
