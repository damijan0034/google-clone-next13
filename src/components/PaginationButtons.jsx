"use client"

import React from 'react'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

import { usePathname,useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function PaginationButtons() {

    const pathname=usePathname()
    const searchParams=useSearchParams()
    const searchTerm=searchParams.get("searchTerm")
    const startIndex=+searchParams.get("start") || "1"
    
  return (
    <div className='text-blue-700 justify-between px-10 pb-4 flex sm:justify-start sm:space-x-44'>
      {startIndex > 1 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex-1}`}>
          <div className='flex items-center flex-col cursor-pointer hover:underline'>
            <FiChevronLeft className='h-5' />
            <p>Previous</p>
          </div>
            
        </Link>
      )}

{startIndex <= 90 && (
        <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex+1}`}>
          <div className='flex items-center flex-col cursor-pointer hover:underline' >
            <FiChevronRight className='h-5' />
            <p>Next</p>
          </div>
            
        </Link>
      )}
      
    </div>
  )
}
