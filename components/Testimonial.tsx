import React from 'react'
import TestimonialCard from './TestimonialCard'

type Props = {}

const Testimonial = (props: Props) => {
  return (
    <div className=' px-5 md:px-20'>
        <div className=' flex justify-between items-center gap-10'>
            <div className='w-1/4'></div>
            <h2 className='text-4xl font-bold tracking-tighter capitalize whitespace-nowrap'>words of appreciation</h2>
            <div className='w-1/4 text-right'>
            {/* <Button title='Add your voice' classname='bg-transparent text-slate-500  hover:bg-transparent p-0 font-medium hover:underline decoration-blue-500 hover:underline-offset-4 hover:text-black' handleClick={handleModal} /> */}
            </div>
        </div>
        {/* {isFetching ? ( */}
  {/* <div className='text-center text-xl pt-10 text-slate-500'>Fetching</div> */}
{/* ) : ( */}
  {/* testimonials.length === 0 ? ( */}
    {/* <div className='text-center text-xl pt-10 text-slate-500'>Testimonial is empty. Be the first to add one.</div> */}
  {/* ) : ( */}
    <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-5'>
      {[1,2,3].map((testimonial) => (
        <TestimonialCard key={testimonial} 
        // testimonial={testimonial}
         />
      ))}
    </div>
  {/* ) */}
{/* )} */}
    </div>
  )
}

export default Testimonial