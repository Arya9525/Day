import { motion } from 'framer-motion';
import Confetti from './Confetti';

const BirthdayPage = ({ navigate }) => {
  const balloons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    emoji: ['🎈', '🎉', '🎂', '🎁'][i % 4],
    x: (i * 12) + 5,
  }));
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #fda4af, #f9a8d4, #e879f9)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Confetti />
      
      {balloons.map(b => (
        <motion.div
          key={b.id}
          style={{
            position: 'absolute',
            fontSize: '4rem',
            left: `${b.x}%`,
            bottom: '-100px',
          }}
          animate={{
            y: [-100, -800],
            x: [0, Math.sin(b.id) * 50],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: b.id * 0.3,
          }}
        >
          {b.emoji}
        </motion.div>
      ))}
      
      <div style={{ textAlign: 'center', padding: '0 24px', zIndex: 10, maxWidth: '800px' }}>
        <motion.div
          style={{ fontSize: '6rem', marginBottom: '32px' }}
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎂
        </motion.div>
        
        <motion.h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 5rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px',
            fontFamily: 'Playfair Display, serif',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
        >
          🎉 Happy Birthday 🎉
        </motion.h1>
        
        <motion.h2
          style={{
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '32px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          My Love ❤️
        </motion.h2>
        
        <motion.div
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: '32px',
            marginBottom: '40px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p style={{ fontSize: '1.5rem', color: 'white', lineHeight: '1.75' }}>
            May your smile always shine brighter than candles ✨
          </p>
        </motion.div>
        
        <motion.button
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            padding: '16px 40px',
            borderRadius: '9999px',
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: '600',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('gallery')}
        >
          Your Birthday Surprises 🎈
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BirthdayPage;