import Image from "next/image";
import BackgroundMusic from "./sections/background-music";
import { Music } from "../../public/icons";
import Navbar from "./components/Navbar";
import MusicProvider from "@/context/MusicContext";


export default function Home() {
  return (
    <MusicProvider>
      <div className='flex flex-col h-screen  '>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-screen absolute w-full'>
          <div className="relative w-full h-full flex items-center justify-center max-w-[675px] max-h-[500px]">
            <Image
              src="https://static.thangduong.info/public/home-book.png"
              alt="Home"
              fill
              className="object-contain !left-1/2 !top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="max-w-[320px] text-center mt-8">
            <h1 className="text-2xl font-bold">Read your favourite books</h1>
            <h2 className="text-[16px] text-[#9D9D9D] pt-2">All your favourites book in one place, read any book, staying at home, on travelling, or anywhere else</h2>
          </div>
        </div>
        <BackgroundMusic />
      </div>
    </MusicProvider>
  );
}
