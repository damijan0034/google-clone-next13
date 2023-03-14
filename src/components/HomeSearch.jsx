"use client"

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {HiMicrophone} from 'react-icons/hi'
import { useRouter } from 'next/navigation'


export default function HomeSearch() {
  const[input,setInput]=useState("");
  const [searchTermLoading,setSearchTermLoading]=useState(false);

  const router=useRouter();

  function handleSubmit(e){
    e.preventDefault();

    if(!input.trim()) return;

    router.push(`/search/web?searchTerm=${input}`)
  }

   async function  randomSearch() {
      setSearchTermLoading(true);
      const response=await fetch(`https://random-word-api.herokuapp.com/word
      `).then((res)=>res.json())
        .then((data)=>data[0])
      if(!response) return;

      router.push(`/search/web?searchTerm=${response}`)
      setSearchTermLoading(false);


}
  
  return (
    <div>
        <form onSubmit={handleSubmit} className='
            flex mt-5 w-full
            border border-gray-300
            rounded-full flex-grow px-6 py-3
            shadow-lg transition-shadow
            max-w-3xl mx-auto
            sm:max-w-xl'>
            <AiOutlineSearch
            className='text-2xl text-gray-500
            cursor-pointer' />
            <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text"
            className='w-full focus:outline-none' />
            <HiMicrophone 
            className='text-2xl text-blue-500'/>
        </form>
        <div className='flex flex-col space-y-2 items-center mt-8 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center'>
          <button onClick={handleSubmit} className='btn'>Google Search</button>
          <button disabled={searchTermLoading} onClick={randomSearch} className='disabled:opacity-80 btn flex items-center'>
          {searchTermLoading ? (
            <img src='/gear.svg' alt='Loading...' />
          ) : "I m feeling lucky"}
          </button>
          
        </div>
    </div>
  )
}
