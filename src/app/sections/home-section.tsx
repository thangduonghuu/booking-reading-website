'use client';
import Image from "next/image";
import { useEffect } from "react";

export default function HomeSection() {
  useEffect(() => {
    const sound = new Howl({
      src: ['https://static.thangduong.info/public/background-chill.mp3'], // replace with your public path
      autoplay: true,
      loop: true,
      volume: 1.0,
      html5: true,
      mute: true, // muted initially to allow autoplay
      onplay: () => {
        sound.mute(false) // unmute after it starts
      },
      onloaderror: (id, err) => {
        console.error('Load error:', err)
      },
      onplayerror: (id, err) => {
        console.warn('Autoplay failed. Waiting for user interaction...')
        const resumeOnClick = () => {
          sound.play()
          window.removeEventListener('click', resumeOnClick)
        }
        window.addEventListener('click', resumeOnClick, { once: true })
      }
    })

    return () => {
      sound.unload()
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-center h-screen absolute w-full'>
      <Image
        src="/images/home-book.png"
        alt="Home"
        fill
        objectFit='contain'
      />
    </div>
  );
}
