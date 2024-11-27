import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(current => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100
        };
        return [...current, newHeart].slice(-8);
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          <Heart className="text-pink-300/40 w-10 h-10" fill="rgba(244, 114, 182, 0.2)" />
        </div>
      ))}
    </div>
  );
}