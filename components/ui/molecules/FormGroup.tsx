import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const FormGroup = ({children}: Props) => {
  return (
    <div className='flex flex-col gap-1'>
        {children}
    </div>
  )
}

export default FormGroup