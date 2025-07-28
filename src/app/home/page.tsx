'use client'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen absolute w-full'>
      <Image
        src="/images/home-book.png"
        alt="Home"
        fill
        objectFit='contain'
      />
      <audio controls>
        <source src="https://static.thangduong.info/public/background-chill.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}
