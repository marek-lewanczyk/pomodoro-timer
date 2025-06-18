import { useEffect, useRef } from 'react';

export function useSound(src: string, volume: number = 1) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
        audioRef.current.volume = volume;
    }, [src, volume]);

    const play = () => {
        audioRef.current?.play().catch(e => console.error('🔈 Sound error:', e));
    };

    return play;
}
