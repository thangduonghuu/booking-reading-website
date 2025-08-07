import Image from "next/image";
import HomeSection from "./sections/home-section";
import BackgroundMusic from "./sections/home-section";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <div className='flex flex-col items-center justify-center h-screen absolute w-full'>
        <Image
          src="/images/home-book.png"
          alt="Home"
          fill
          objectFit='contain'
        />
      </div>
      <BackgroundMusic />
    </div>
  );
}
