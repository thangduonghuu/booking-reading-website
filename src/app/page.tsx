import MusicProvider from "@/context/MusicContext";
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from "./components/Navbar";
import PaginateHome from "./sections/paginate-home";
import { Button } from "./components/Button/Button";
// import './styles.css';


export default function Home() {
  return (
    <MusicProvider>
      <div className='flex flex-col h-dvh'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-screen absolute w-full'>
          <PaginateHome />
          <div className="max-w-[350px] text-center mt-8">
            <h1 className="text-2xl font-bold">Read your favourite books</h1>
            <h2 className="text-[16px] text-[#9D9D9D] pt-2">All your favourites book in one place, read any book, staying at home, on travelling, or anywhere else</h2>
          </div>
          <div className="pt-10">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </MusicProvider>
  );
}
