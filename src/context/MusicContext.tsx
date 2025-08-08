'use client';
import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Howl } from "howler";

const context = createContext({
    ___testing: true,
    data: null,
    loading: true,
    playing: false,
    setLoading: (_loading: boolean) => { },
    setSuccess: (_success: boolean) => { },
    playMusic: () => { },
    pauseMusic: () => { },
    success: false,
    error: null,
});

export default function MusicProvider({ children }: { children: ReactNode }) {
    const soundRef = useRef<Howl | null>(null);
    const [playing, setPlaying] = useState(true);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        const sound = new Howl({
            src: ['https://static.thangduong.info/public/background-chill.mp3'],
            mute: true,         
            autoplay: true,
            volume: 0.5,
            html5: true,        
            onplay: () => {
                console.log('Playing');
                sound.mute(false); // unmute after autoplay
            },
            onplayerror: (_, err) => {
                // console.error('Play error:', err);
            },
        });

        return () => {
            sound.unload();
        };
    }, []);

    const playMusic = () => {
        console.log("Playing music");
        if (soundRef.current) {
            setPlaying(true)
            soundRef.current.play();
        }
    }

    const pauseMusic = () => {
        console.log("Pausing music");
        if (soundRef.current) {
            setPlaying(false)
            soundRef.current.pause();
        }
    }

    const contextValue = useMemo(() => {
        return {
            ___testing: true,
            data: null,
            error: null,
            loading,
            playing,
            setLoading,
            setSuccess,
            success,
            playMusic,
            pauseMusic
        };
    }, []);

    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    );
}
const useMusicContext = () => {
    const _context = useContext(context);
    return _context;
}

export { useMusicContext };
