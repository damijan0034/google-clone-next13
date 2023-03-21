import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons'

export default function ImageSearchResults({results}) {
  return (
    <div className='pb-40 mt-4'>
        <div className=' px-3 space-x-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            
            {results.items.map(result=>(
                <div key={result.link}>
                       <div className='group'>
                            <Link href={result.image.contextLink}>
                                <img className='h-60 hover:shadow-lg w-full object-contain transition-shadow' src={result.link} alt={result.title} />
                            </Link>
                            <Link href={result.image.contextLink}>
                                <h2 className='hover:underline text-xl truncate'>{result.title}</h2>
                            </Link>
                            <Link href={result.image.contextLink}>
                                <p className='hover:underline text-gray-600'>{result.displayLink}</p>
                            </Link>
                        </div> 
                </div>
                
            ))}
        </div>
        <div className='ml-16'>
            <PaginationButtons />       
        </div>
        
    </div>
  )
}
