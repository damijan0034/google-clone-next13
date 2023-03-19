import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react'

export default async function page({searchParams}) {
  const response=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
  if(!response.ok){
    throw new Error("Something went wrong")
  }
  const data= await response.json();
  console.log(data);
  const results=data.items;
  if(!results){
    return (
    <div className='flex pt-10 flex-col justify-center items-center'>
        <h1 className='text-4xl'>No results found</h1>
        <p>Try something else</p>
        <Link className='text-blue-500' href='/'>Home </Link>
    </div>
    )
    
  }
  return (
    <>
      {results && <WebSearchResults results={data} />}
    </>
  )
}
