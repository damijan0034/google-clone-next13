"use client"

import React, { useEffect } from 'react'

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log("Error:",error);
    },[error])
  return (
    <div className='flex pt-10 flex-col justify-center items-center'>
        <h1 className='text-3xl mb-3'>Something went wrong</h1>
        <button className='text-blue-500' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
