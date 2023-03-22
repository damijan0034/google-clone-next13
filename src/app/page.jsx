import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
   <>
      <HomeHeader />
    <div className='flex flex-col items-center mt-4'>
    <Image
        width="300" height="100"
        src="/googile1.svg"

      />
      <HomeSearch />
    </div>
      
   </>
  )
}
