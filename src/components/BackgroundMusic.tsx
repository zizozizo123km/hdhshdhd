import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';

export const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Playback blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio
        ref={audioRef}
        src="https://www.chosic.com/wp-content/uploads/2021/07/Rainy-Day-Piano-Version.mp3"
        loop
      />
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isPlaying 
            ? 'bg-brand-gold text-white rotate-[360deg]' 
            : 'bg-white/80 backdrop-blur-md text-brand-gold hover:bg-white'
        } border border-brand-gold/20`}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Music2 className="w-6 h-6" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
              />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Music className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-0 right-20 py-3 px-6 bg-white/90 backdrop-blur-md rounded-full border border-brand-gold/10 shadow-xl whitespace-nowrap hidden md:block"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-medium">
              Playing: Soft Piano Harmony
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
