import React from 'react'

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div>
        <h1 className='font-bold text-slate-500 dark:text-slate-300 text-3xl tracking-tighter '>My Journey</h1>

        <div className='relative border-l-4 dark:border-white pl-5 pb-3'>
          <div className='absolute -left-3 top-4 w-5 h-5 rounded-full shadow-xl shadow-blue-700 bg-blue-500 '></div>
          <div className='pt-3'>
            <h1 className='text-2xl text-slate-400 dark:text-slate-200 tracking-tighter font-bold'>Deerhold Ltd.</h1>
            <h6 className='text-slate-700 dark:text-slate-500 tracking-tight font-semibold text-md'>Internship | Mar 2022 - Aug 2022</h6>
            <ul className='pl-6 text-sm text-slate-500 dark:text-slate-100 list-disc '>
              <li>Created user interface using React.js.</li>
              <li>Integrated RESTful APIs.</li>
              <li>Participated in code reviews, provided constructive feedback, and iteratively improved code quality.</li>
            </ul>
          </div>
        </div>
        <div className='relative border-l-4 dark:border-white pl-5 pb-3'>
          <div className='absolute -left-3 top-4 w-5 h-5 rounded-full shadow-xl shadow-blue-700 bg-blue-500 '></div>
          <div className='pt-3'>
            <h1 className='text-2xl text-slate-400 dark:text-slate-200 tracking-tighter font-bold'>goTaxi Nepal</h1>
            <h6 className='text-slate-700 dark:text-slate-500 tracking-tight font-semibold text-md'>Frontend Developer | Jan 2023 - Present</h6>
            <ul className='pl-6 text-sm text-slate-500 dark:text-slate-100 list-disc '>
              <li>Enhanced and Optimized user interface.</li>
              <li>Managed global state using Redux, ensuring consistent data flow and efficient state management.</li>
              <li>Integrated role based authentication and authorization.</li>
              <li>Built and deployed project to server.</li>
              <li>Integrated map (galliMaps) on the project.</li>
              <li>Integrated payment methods (eSewa and Khalti).</li>
              <li>Implemented websocket (Pusher).</li>
            </ul>
          </div>
        </div>


    </div>
  )
}

export default Timeline