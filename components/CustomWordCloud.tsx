'use client'
import React from 'react'
import D3WordCloud from 'react-d3-cloud';
type Props = {}

const data=[
    {
        text:"Hey",
        value:3
    },
    {
        text:"Hello",
        value:6
    },
    {
        text:"Good Morning",
        value:4
    },
    {
        text:"Bye",
        value:10
    },
    {
        text:"World",
        value:1
    }
]

const fontSizeMapper=(word:{value:number})=>{
    return Math.log2(word.value) * 5 + 16
}

const CustomWordCloud = (props: Props) => {
  return (
    <D3WordCloud height={550}  fontSize={fontSizeMapper} padding={10} fill={'black'} rotate={0} data={data}/>
  )
}

export default CustomWordCloud