"use client";
import React, { SyntheticEvent, useState } from "react";
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
  const [data, setData] = useState({
    name: "",
    email: "",
    designation: "",
    image: "",
    message: "",
  });
  const [img, setImg] = useState("");
  const [testimonials, setTestimonials] = useState<Itestimonial[]>([]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e: any) => {
    setImg(e.target.files[0]);
  };

  const handleSubmit=async(e:any)=>{
    // console.log("clicked")
    e.preventDefault();
    let requestData={};
    // setIsLoading(true);
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

    // Update the image URL and other data in state
    setData({ ...data, image: imageUrl });

    // Create a new object containing the data and image URL
    requestData = { ...data, image: imageUrl };
      }
      else{
        requestData=data;
      }
      const response=await axios.post("http://localhost:3000/api/testimonial",requestData)
      if(response.status===200){
        console.log("response ===",response)
        setData({name:'',email:'',designation:'',image:'',message:''})
        // toast.success("Thank you for your feedback!")
        // setIsOpen(false);
      }
      else{
        console.log("error occured")
        // toast.error("Cannot post feedback!")
      }
    } catch (error) {
      console.log("error occured")
      // toast.error("Cannot Post !")
    } 
    // finally{
      // setIsLoading(false)
    }

  return (
    <div className=" px-5 md:px-20">
      <div className=" flex justify-between items-center gap-10">
        <div className="w-1/4"></div>
        <h2 className="text-4xl font-bold tracking-tighter capitalize whitespace-nowrap">
          words of appreciation
        </h2>
        <div className="w-1/4 text-right">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add</Button>
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
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Input
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
                    className="resize-none"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                  />
                </div>
                <Button>Create</Button>
              </form>
            </DialogContent>
          </Dialog>
          {/* <Button title='Add your voice' classname='bg-transparent text-slate-500  hover:bg-transparent p-0 font-medium hover:underline decoration-blue-500 hover:underline-offset-4 hover:text-black' handleClick={handleModal} /> */}
        </div>
      </div>
      {/* {isFetching ? ( */}
      {/* <div className='text-center text-xl pt-10 text-slate-500'>Fetching</div> */}
      {/* ) : ( */}
      {/* testimonials.length === 0 ? ( */}
      {/* <div className='text-center text-xl pt-10 text-slate-500'>Testimonial is empty. Be the first to add one.</div> */}
      {/* ) : ( */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
        {[1, 2, 3].map((testimonial) => (
          <TestimonialCard
            key={testimonial}
            // testimonial={testimonial}
          />
        ))}
      </div>
      {/* ) */}
      {/* )} */}
    </div>
  );
};

export default Testimonial;
