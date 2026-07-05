import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface HeartParticle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export const HeartRain = () => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    // Generate initial batch
    const initialHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * (20 - 10) + 10,
      duration: Math.random() * (10 - 5) + 5,
      delay: Math.random() * 5,
    }));
    setHearts(initialHearts);

    // Continue generating
    const interval = setInterval(() => {
      const newHeart: HeartParticle = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * (20 - 10) + 10,
        duration: Math.random() * (10 - 5) + 5,
        delay: 0,
      };

      setHearts((prev) => [...prev.slice(-30), newHeart]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: -100, x: `${heart.x}vw`, opacity: 0, rotate: 0 }}
            animate={{ 
              y: '110vh', 
              opacity: [0, 0.3, 0.3, 0],
              rotate: [0, 90, -90, 180] 
            }}
            transition={{ 
              duration: heart.duration, 
              delay: heart.delay,
              ease: "linear"
            }}
            className="absolute text-brand-gold/40"
          >
            <Heart 
              size={heart.size} 
              fill="currentColor" 
              style={{ filter: 'blur(0.5px)' }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
