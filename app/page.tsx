import Blog from '@/components/ui/molecules/Blog';

type Blog={
  id:string;
  title : string;
  description:string;
  date:Date;
}

const fetchBlogs=async()=>{
  const res=await fetch("http://localhost:3000/api/blog")
  const data=await res.json();
  return data.posts;
}

export default async function Home() {
  const posts= await fetchBlogs();
  console.log("blogs",posts)
  return (
    <main className="w-full h-full grid grid-cols-1 gap-5 px-5 md:px-20">
      {
        posts.map((post:Blog)=>(
          <Blog key={post.id} blog={post} />
        ))
      }
    </main>
  )
}
