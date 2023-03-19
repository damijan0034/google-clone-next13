import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'

export default function WebSearchResults({results}) {
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] pb-40 sm:pb-24'>
        <p className='text-sm text-gray-600 mb-6 mt-3'>
            About {results.searchInformation?.
                    formattedTotalResults} results in 
                    {results.searchInformation?.formattedSearchTime} seconds
        </p>
        {results.items.map((result)=>(
            <div className=' pl-10 mb-8 max-w-xl'>
                <div className='flex flex-col' key={result.link}>
                    <Link className=' pb-2 text-sm truncate' href={result.link}>
                        {result.formattedUrl}
                    </Link>
                    <Link className='text-xl truncate text-blue-800 hover:underline decoration-blue-800 ' href={result.link}>
                        {result.title}
                    </Link>
                </div>
                <p className='font-medium text-gray-600'>
                    {Parser(result.htmlSnippet)}
                </p>
            </div>
        ))}
    </div>
  )
}
