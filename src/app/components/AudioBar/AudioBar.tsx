'use client';
import PauseIcon from '@mui/icons-material/PauseRounded';
import PlayIcon from '@mui/icons-material/PlayArrowRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import { Box, Button, LinearProgress, Stack } from '@mui/material';
import React, { useRef, useState } from 'react';

interface AudioBarProps {
    src: string;
}

const AudioBar: React.FC<AudioBarProps> = ({ src }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlayPause = () => {
        console.log('handlePlayPause called');
        // if (!audioRef.current) return;
        // if (isPlaying) {
        //     audioRef.current.pause();
        // } else {
        //     audioRef.current.play();
        // }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
        }
    };

    return (
        <Box paddingY={1} style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'fixed', bottom: 0, width: '100%', left: 0, backgroundColor: '#000'}} >
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" width="100%">
                <Stack width="100%" alignItems="center" justifyContent="center" maxWidth="40%" paddingY={2} gap={1}>
                    <Stack direction="row" alignItems="center" justifyContent="center"  width="100%">
                        <Box>
                            <Button >
                                <SkipPreviousRoundedIcon sx={{
                                    fontSize: 40,
                                    color: '#f0f0f0',
                                }} />
                            </Button>
                        </Box>
                        <Box>
                            {isPlaying ? (
                                <Button onClick={handlePlayPause}>
                                    <PauseIcon sx={{
                                        fontSize: 40,
                                        color: '#f0f0f0',
                                    }} />
                                </Button>
                            ) : (
                                <Button onClick={handlePlayPause}>
                                    <PlayIcon sx={{
                                        fontSize: 40,
                                        color: '#f0f0f0',
                                    }} />
                                </Button>
                            )}
                        </Box>
                        <Box>
                            <Button>
                                <SkipNextRoundedIcon sx={{
                                    fontSize: 40,
                                    color: '#f0f0f0',
                                }} />
                            </Button>
                        </Box>
                    </Stack>
                    <Box width="100%">
                        <LinearProgress variant="buffer" color='primary' value={100} valueBuffer={0} />
                    </Box>
                </Stack>
            </Stack>

        </Box>
    );
};

export default AudioBar;