import React from 'react'
import { Navbar } from './_components/navbar'
import { Footer } from './_components/footer'


const MarketingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar/>
        <main className='pt-24 pb-20 bg-slate-100 '>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default MarketingLayout