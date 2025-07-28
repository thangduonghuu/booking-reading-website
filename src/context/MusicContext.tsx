'use client';
import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Howl } from "howler";

const context = createContext({
    ___testing: true,
    data: null,
    loading: true,
    setLoading: (_loading: boolean) => { },
    setSuccess: (_success: boolean) => { },
    success: false,
    error: null,
});

export default function MusicProvider({ children }: { children: ReactNode }) {
    const soundRef = useRef<Howl | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const sound = new Howl({
            src: ['https://static.thangduong.info/public/background-chill.mp3'],
            mute: true,         // required for autoplay
            autoplay: true,
            volume: 0.5,
            html5: true,        // force use of HTML5 <audio>
            onplay: () => {
                console.log('Playing');
                sound.mute(false); // unmute after autoplay
            },
            onplayerror: (_, err) => {
                console.error('Play error:', err);
            },
        });

        return () => {
            sound.unload();
        };
    }, []);

    const contextValue = useMemo(() => {
        return {
            ___testing: true,
            data: null,
            error: null,
            loading,
            setLoading,
            setSuccess,
            success,
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
