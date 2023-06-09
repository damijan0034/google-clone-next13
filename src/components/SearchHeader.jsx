import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from'react-icons/ri'
import {TbGridDots} from'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  return (
    <>
    <header className='sticky top-0 bg-white'>
        <div className='w-full flex items-center justify-center p-6'>
            <Link href='/'>
                <Image src='/googile.svg' alt='googile' width='80' height='40' />
            </Link>
            <div className='flex-1'>
                <SearchBox />
            </div>
            <div className='hidden sm:inline-flex space-x-2'>
                <RiSettings3Line className='header-icon' />
                <TbGridDots className='header-icon' />
            </div>
            <button className='bg-blue-500 ml-2 text-white font-md px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-all'>
                Sign In
                </button>
        
        </div>
        
    </header>
    <SearchHeaderOptions /> 
    </>
  )
}
