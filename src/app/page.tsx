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
          <Music className="fill-white" />
          <Image
            src="/images/home-book.png"
            alt="Home"
            fill
            objectFit='contain'
          />
        </div>
        <BackgroundMusic />
      </div>
    </MusicProvider>
  );
}
