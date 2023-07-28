import Navbar from '@/components/ui/molecules/Navbar'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'FullStack Blog App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className=' min-h-screen pt-14'>
        {children}
        <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover={false}
theme="light"
/>
        </div>
        </body>
    </html>
  )
}
