'use client';
import { useMusicContext } from "@/context/MusicContext";
import { Music } from "../../../public/icons";
import { NoMusic } from "../../../public/icons";

const Navbar = () => {
    const { playing, playMusic, pauseMusic } = useMusicContext();

    return (
        <nav className='flex items-center justify-end p-4 absolute w-full z-20'>
            <div className='flex items-center justify-end w-full max-w-[1320px] mx-auto'>
                <div className='flex items-center  gap-2 text-white'>
                    <div className="cursor-pointer hover:scale-110 transition-transform duration-200" onClick={() => {
                        if (playing) {
                            pauseMusic();
                        } else {
                            playMusic();
                        }
                    }}>
                        {playing ? <Music className="fill-white text-2xl" /> : <NoMusic className="fill-white text-2xl" />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
