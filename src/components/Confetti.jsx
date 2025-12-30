import { motion } from 'framer-motion';

const Confetti = () => {
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 2,
  }));
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map(c => (
        <motion.div
          key={c.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${c.left}%`,
            top: '-10px',
            background: ['#ff69b4', '#ffd700', '#ff1493', '#ffb6c1', '#dda0dd'][Math.floor(Math.random() * 5)],
          }}
          animate={{
            y: [0, window.innerHeight + 50],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;