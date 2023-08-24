"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import useSWR from 'swr';
import { fetcher } from "@/lib/fetcher";
import LoadingSkeleton from "./LoadingSkeleton";
import {Loader2} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type Props = {};
export interface Itestimonial {
  _id: string;
  name: string;
  email: string;
  image: string;
  message: string;
  status: boolean;
  designation: string;
}

const PRESET_KEY = "wki449l7";
const CLOUD_NAME = "joyadeep";

const Testimonial = (props: Props) => {
  useEffect(()=>{
    const fetch=async()=>{
      setIsLoading(true)
      try {
        const result=await axios.get("/api/testimonial");
        if(result.status===200){
          setTestimonials(result.data.result)
        }
        else throw new Error("something went wrong!")
      } catch (error) {
        console.log("error",error)
      } finally {
        setIsLoading(false)
      }
    }
    fetch()
  },[])
  const {toast}=useToast();
  const [data, setData] = useState({
    name: "",
    email: "",
    designation: "",
    image: "",
    message: "",
  });
  const [img, setImg] = useState("");
  const [testimonials, setTestimonials] = useState<Itestimonial[]>([]);
  const [isOpen,setIsOpen]=useState(false)
  const [isLoading,setIsLoading]=useState(false);
  const [isSubmiting,setIsSubmitting]=useState(false)

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e: any) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    let requestData={};
    setIsSubmitting(true)
    try {
      if (img){
        const formdata=new FormData();
      formdata.append('file',img)
      formdata.append('upload_preset',PRESET_KEY)
      const result=await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,formdata,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
    })
    const imageUrl = result.data.url;

    setData({ ...data, image: imageUrl });

    requestData = { ...data, image: imageUrl };
      }
      else{
        requestData=data;
      }
      const response=await axios.post("/api/testimonial",requestData)
      if(response.status===201){
        toast({title:"Created",description:"Your testimonial has been created successfully!"})
        setData({name:'',email:'',designation:'',image:'',message:''})
        setImg("")
        setIsOpen(false);
      }
      else{
        toast({variant:'destructive',title:"Error",description:"Cannot post your words right now"})
        console.log("error occured",response)
      }
    } catch (error) {
      console.log("error occured")
    } finally{
      setIsSubmitting(false)
    }
    }

  return (
    <div className=" px-5 md:px-20">
        <h2 className="text-4xl text-center font-bold tracking-tighter capitalize whitespace-nowrap">
          words of appreciation
        </h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen} modal={true}>
            <DialogTrigger asChild>
              <div className="w-full text-right">
              <Button variant="link" onClick={()=>setIsOpen(true)}>Add your voice</Button>
              </div>
            </DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">Add your words</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                <div className="flex gap-3">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input 
                  required
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                  required
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                  required
                    name="designation"
                    value={data.designation}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                  required
                    className="resize-none"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                  />
                </div>
                <Button disabled={isSubmiting}>{isSubmiting && <Loader2 className="animate-spin"/>} Create</Button>
              </form>
            </DialogContent>
          </Dialog>
{
      isLoading ? 
      (
        <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
       { [1,2,3].map((item)=>(
        <SwiperSlide key={item}>
          <LoadingSkeleton/>
        </SwiperSlide>
        ))}
        </Swiper>
      )
       : (
        <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((testimonial,index) => (
          <SwiperSlide key={index}>
          <TestimonialCard
            key={testimonial._id}
            testimonial={testimonial}
            />
            </SwiperSlide>
        ))}
        
      </Swiper>
       )}

    </div>
  );
};

export default Testimonial;
