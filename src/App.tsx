import { useEffect, useState } from 'react';
import { getTimeRemaining } from './utils/dateUtils';
import { CountdownUnit } from './components/CountdownUnit';
import { FloatingHearts } from './components/FloatingHearts';

function App() {
  const weddingDate = new Date('2025-01-31T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(weddingDate));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-purple-900/20" />
      <div className="text-center p-10 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 relative z-10 shadow-2xl">
        <h1 className="text-6xl font-light text-white mb-3 font-serif">Mahy's Wedding</h1>
        <p className="text-2xl text-white/90 mb-14 font-light">January 31, 2025</p>
        
        <div className="flex justify-center items-center gap-8 mb-14">
          <CountdownUnit value={timeRemaining.days} label="Days" />
          <CountdownUnit value={timeRemaining.hours} label="Hours" />
          <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
        </div>

        <p className="text-white/95 italic text-xl max-w-2xl mx-auto leading-relaxed">
          "As you step into this new chapter, may your days be filled with love and your nights with laughter 🌺"
        </p>
      </div>
      <FloatingHearts />
    </div>
  );
}

export default App;