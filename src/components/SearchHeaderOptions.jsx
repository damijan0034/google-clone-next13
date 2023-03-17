"use client"

import React from 'react'
import {AiOutlineSearch,AiFillCamera} from 'react-icons/ai';
import { usePathname,useRouter,useSearchParams } from 'next/navigation';

export default function SearchHeaderOptions() {

  const pathName=usePathname();
  const router=useRouter();
  const searchParams=useSearchParams();
  const searchTerm=searchParams.get('searchTerm');

  function selectTab(tab){
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`)
  }
  return (
    <div className='flex justify-center sm:justify-start space-x-2 border-b text-gray-700 text-sm pl-3'>
      <div onClick={()=>selectTab("All")} className={`${pathName === "/search/web" && "text-blue-600 border-b-blue-600"} flex items-center space-x-1 border-b-4 border-transparent pb-3 px-2 cursor-pointer active:text-blue-500`}>
      <AiOutlineSearch className='text-md' />
      <p>All</p>
    </div>
    <div onClick={()=>selectTab("Images")} className={`${pathName === "/search/image" && "text-blue-600 border-b-blue-600"} flex items-center space-x-1 border-b-4 border-transparent pb-3 px-2 cursor-pointer active:text-blue-500`}>
      <AiFillCamera className='text-md' />
      <p>Images</p>
    </div>
    </div>
    
  )
}
