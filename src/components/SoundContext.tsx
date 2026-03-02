import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type SoundContextType = {
    playClick: () => void;
    playPop: () => void;
    playWoosh: () => void;
    isMuted: boolean;
    toggleMute: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
    const [isMuted, setIsMuted] = useState(false);
    const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

    useEffect(() => {
        // Initialize lazily to respect browser autoplay policies
        const initAudio = () => {
            if (!audioCtx) {
                setAudioCtx(new (window.AudioContext || (window as any).webkitAudioContext)());
            }
        };
        window.addEventListener('click', initAudio, { once: true });
        window.addEventListener('keydown', initAudio, { once: true });
        return () => {
            window.removeEventListener('click', initAudio);
            window.removeEventListener('keydown', initAudio);
        };
    }, [audioCtx]);

    const playSound = useCallback((type: 'click' | 'pop' | 'woosh') => {
        if (isMuted || !audioCtx) return;

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        const now = audioCtx.currentTime;

        if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === 'pop') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
            gainNode.gain.setValueAtTime(0.15, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'woosh') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(50, now + 0.2);
            gainNode.gain.setValueAtTime(0.05, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
        }
    }, [audioCtx, isMuted]);

    const playClick = useCallback(() => playSound('click'), [playSound]);
    const playPop = useCallback(() => playSound('pop'), [playSound]);
    const playWoosh = useCallback(() => playSound('woosh'), [playSound]);

    const toggleMute = () => setIsMuted(prev => !prev);

    return (
        <SoundContext.Provider value={{ playClick, playPop, playWoosh, isMuted, toggleMute }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
}
