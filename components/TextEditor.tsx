"use client"
import React from 'react'
import EditorJS from '@editorjs/editorjs';
import dynamic from 'next/dynamic';

type Props = {
    data?:any;
    onChange?:any;
    holder?:any;
}

const TextEditor = ({ data, onChange, holder }: Props) => {
    const editor = new EditorJS({
        holder
      });

    //   editor.data = data;

    //   editor.on('change', () => {
    //     onChange(editor.data);
    //   });

  return (
    <div className='h-32 border border-slate-200 px-2 rounded-md over'>
      <div id={holder} />
    </div>
  )
}

export default TextEditor