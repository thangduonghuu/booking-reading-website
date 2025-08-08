'use client';

import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Howl } from 'howler';

type MusicContextValue = {
    ___testing: boolean;
    data: null;
    error: null | string;
    loading: boolean;
    success: boolean;
    playing: boolean;
    setLoading: (loading: boolean) => void;
    setSuccess: (success: boolean) => void;
    playMusic: () => void;
    pauseMusic: () => void;
    resumeMusic: () => void;
    stopMusic: () => void;
    toggleMusic: () => void;
};

const MusicContext = createContext<MusicContextValue>({
    ___testing: true,
    data: null,
    error: null,
    loading: true,
    success: false,
    playing: false,
    setLoading: () => { },
    setSuccess: () => { },
    playMusic: () => { },
    pauseMusic: () => { },
    resumeMusic: () => { },
    stopMusic: () => { },
    toggleMusic: () => { },
});

export default function MusicProvider({ children }: { children: ReactNode }) {
    const soundRef = useRef<Howl | null>(null);
    const pendingPlayRef = useRef(false); // prevents stacked play() calls
    const resumeHandlerRef = useRef<(() => void) | null>(null); // store exact handler

    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        const sound = new Howl({
            src: ['https://static.thangduong.info/public/background-chill.mp3'],
            html5: true,
            volume: 0.5,
            loop: true,
            mute: true,      // start muted to satisfy autoplay policies
            autoplay: true,  // attempt autoplay
            onload: () => {
                setSuccess(true);
                setLoading(false);
            },
            onloaderror: (_id, err) => {
                setError(typeof err === 'string' ? err : 'Load error');
                setLoading(false);
                pendingPlayRef.current = false;
            },
            onplay: () => {
                // unmute after playback starts (optional: fade in)
                // sound.volume(0);
                sound.mute(false);
                // sound.fade(0, 0.5, 800);
                setPlaying(true);
                setError(null);
                pendingPlayRef.current = false;

                // If we had a one-off resume handler attached, remove it now
                if (resumeHandlerRef.current) {
                    window.removeEventListener('pointerdown', resumeHandlerRef.current);
                    window.removeEventListener('keydown', resumeHandlerRef.current);
                    resumeHandlerRef.current = null;
                }
            },
            onpause: () => setPlaying(false),
            onstop: () => setPlaying(false),
            onend: () => setPlaying(false),
            onplayerror: () => {
                // Autoplay blocked — ask for one user gesture; attach ONCE
                setError('Autoplay blocked; click/tap to start.');
                pendingPlayRef.current = false;

                if (!resumeHandlerRef.current) {
                    const resumeOnInteraction = () => {
                        try {
                            sound.play();
                        } finally {
                            // listeners are removed in onplay (after successful start)
                        }
                    };
                    resumeHandlerRef.current = resumeOnInteraction;
                    window.addEventListener('pointerdown', resumeOnInteraction, { once: true });
                    window.addEventListener('keydown', resumeOnInteraction, { once: true });
                }
            },
        });

        soundRef.current = sound;

        return () => {
            // Remove the exact stored resume handler (if any)
            if (resumeHandlerRef.current) {
                window.removeEventListener('pointerdown', resumeHandlerRef.current);
                window.removeEventListener('keydown', resumeHandlerRef.current);
                resumeHandlerRef.current = null;
            }
            sound.unload();
            soundRef.current = null;
            pendingPlayRef.current = false;
        };
    }, []);

    const safePlay = () => {
        const s = soundRef.current;
        if (!s) return;
        if (s.playing() || pendingPlayRef.current) return; // no spam
        pendingPlayRef.current = true;
        try {
            s.play();
        } catch {
            pendingPlayRef.current = false;
        }
    };

    const playMusic = () => safePlay();

    const pauseMusic = () => {
        const s = soundRef.current;
        if (!s) return;
        if (s.playing()) s.pause();
        pendingPlayRef.current = false;
    };

    const resumeMusic = () => {
        const s = soundRef.current;
        if (!s) return;
        if (!s.playing()) safePlay();
    };

    const stopMusic = () => {
        const s = soundRef.current;
        if (!s) return;
        s.stop();
        pendingPlayRef.current = false;
    };

    const toggleMusic = () => {
        const s = soundRef.current;
        if (!s) return;
        if (s.playing()) {
            s.pause();
            pendingPlayRef.current = false;
        } else {
            safePlay();
        }
    };

    const contextValue = useMemo<MusicContextValue>(
        () => ({
            ___testing: true,
            data: null,
            error,
            loading,
            success,
            playing,
            setLoading,
            setSuccess,
            playMusic,
            pauseMusic,
            resumeMusic,
            stopMusic,
            toggleMusic,
        }),
        [error, loading, success, playing]
    );

    return <MusicContext.Provider value={contextValue}>{children}</MusicContext.Provider>;
}

export const useMusicContext = () => useContext(MusicContext);
