"use client"

import { useSearchParams,useRouter } from 'next/navigation'

import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
 

export default function SearchBox() {
  const searchParams=useSearchParams();
  const searchTerm=searchParams.get("searchTerm");

  const[term,setTerm]=useState(searchTerm || "");

  const router=useRouter();

  function handleSubmit(e){
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-grow border border-gray-200 rounded-full shadow-lg items-center px-6 py-3 mr-10 ml-5 max-w-4xl' >
        <input onChange={(e)=>setTerm(e.target.value)} value={term} type="text" className='w-full focus:outline-none' />
        <RxCross2 onClick={()=>setTerm("")}  className='text-2xl text-gray-500 cursor-pointer' />
        <BsFillMicFill className='pl-4 border-l-2 border-gray-300 mr-2 text-4xl text-blue-500 hidden sm:inline-flex' />
        <AiOutlineSearch onClick={handleSubmit} className='text-2xl text-blue-500 cursor-pointer hidden sm:inline-flex' />
        
        
      </form>
    </div>
  )
}
