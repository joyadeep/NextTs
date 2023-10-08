import {create} from 'zustand'

export type ModalType="experience";

interface ModalStore {
    name:ModalType | null;
    data:any;
    isOpen:boolean;
    onOpen:(name:ModalType,data?:any)=>void;
    onClose:()=>void;
}

export const useModal=create<ModalStore>((set)=>({
    name:null,
    data:{},
    isOpen:false,
    onOpen:(name,data={})=>set({isOpen:true,name,data}),
    onClose:()=>set({name:null,isOpen:false})
}))