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
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/home-book.png"
              alt="Home"
              fill
              className="object-contain !left-1/2 max-w-[675px] !top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

        </div>
        <BackgroundMusic />
      </div>
    </MusicProvider>
  );
}
