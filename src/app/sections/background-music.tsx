'use client'

import { useEffect } from 'react'
import { Howl } from 'howler'

export default function BackgroundMusic() {
    // useEffect(() => {
    //     const sound = new Howl({
    //         src: ['https://static.thangduong.info/public/background-chill.mp3'],
    //         loop: true,
    //         volume: 1.0,
    //         html5: true,
    //         mute: true, // allow autoplay
    //     })

    //     const startPlayback = () => {
    //         sound.play()
    //         sound.once('play', () => {
    //             sound.mute(false)
    //             console.log('Music started')
    //         })

    //         // Remove listeners after first interaction
    //         window.removeEventListener('click', startPlayback)
    //         window.removeEventListener('keydown', startPlayback)
    //         window.removeEventListener('touchstart', startPlayback)
    //     }

    //     window.addEventListener('click', startPlayback, { once: true })
    //     window.addEventListener('keydown', startPlayback, { once: true })
    //     window.addEventListener('touchstart', startPlayback, { once: true })

    //     return () => {
    //         sound.unload()
    //         window.removeEventListener('click', startPlayback)
    //         window.removeEventListener('keydown', startPlayback)
    //         window.removeEventListener('touchstart', startPlayback)
    //     }
    // }, [])

    return null
}
