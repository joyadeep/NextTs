'use client'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

interface Ieditor{
  value:string;
  onChange:any;
}
const Editor = ({value,onChange}:Ieditor) => {
  return (
    <ReactQuill className='bg-transparent rounded-md' value={value} onChange={onChange}   />
  )
}

export default Editor