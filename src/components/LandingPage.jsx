import { motion } from 'framer-motion';
import FloatingHearts from './FloatingHearts';

const LandingPage = ({ navigate, startMusic }) => {
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
        background: 'linear-gradient(to bottom right, #f9a8d4, #c084fc, #818cf8)',
      }}
    >
      <FloatingHearts />
      <div style={{ textAlign: 'center', padding: '0 24px', zIndex: 10 }}>
        <motion.h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 5rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px',
            fontFamily: 'Playfair Display, serif',
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hey Love… ❤️
        </motion.h1>
        
        <motion.p
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '16px',
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          today is a very special day
        </motion.p>
        
        <motion.p
          style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '48px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          I made something just for you
        </motion.p>
        
        <motion.button
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 1.2, stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            startMusic();
            navigate('birthday');
          }}
        >
          Start the Surprise 🎁
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LandingPage;