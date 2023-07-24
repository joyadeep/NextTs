import Button from '@/components/ui/atoms/Button'
import Input from '@/components/ui/atoms/Input'
import PostCard from '@/components/ui/compounds/PostCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className='w-full h-72 relative'>
        <Image loading='lazy' alt='' src="/images/trippy.png" fill className='object-cover' />
      </div>
      <h3 className='text-3xl font-bold mt-3 text-slate-700'>Blog App</h3>
      <h5 className='text-lg font-medium capitalize'>Start creating your blog</h5>
      <Button title='Lets Go' type='button' classname='shadow-lg shadow-black/30 px-10'/>
      <div className='grid grid-cols-3 gap-3 mt-10'>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      </div>
    </main>
  )
}
