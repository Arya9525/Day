import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryPage = ({ navigate }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { id: 1, quote: "Your smile is my favorite gift 🎁", color: 'linear-gradient(to bottom right, #f472b6, #fb7185)' },
    { id: 2, quote: "Every birthday with you feels magical ✨", color: 'linear-gradient(to bottom right, #c084fc, #818cf8)' },
    { id: 3, quote: "You make my world brighter 🌟", color: 'linear-gradient(to bottom right, #facc15, #fb923c)' },
    { id: 4, quote: "Forever grateful for you 💖", color: 'linear-gradient(to bottom right, #e879f9, #f9a8d4)' },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #a5b4fc, #c084fc, #f9a8d4)',
        padding: '80px 24px',
      }}
    >
      <motion.h1
        style={{
          fontSize: 'clamp(3rem, 8vw, 4rem)',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '64px',
          fontFamily: 'Playfair Display, serif',
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Moments & Messages 💕
      </motion.h1>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        marginBottom: '48px',
      }}>
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            style={{
              background: img.color,
              borderRadius: '24px',
              padding: '32px',
              cursor: 'pointer',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '4px solid rgba(255, 255, 255, 0.5)',
              height: '256px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            onClick={() => setSelectedImage(img)}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>
                {['💝', '🌸', '🌟', '💖'][i]}
              </div>
              <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600' }}>
                Click to reveal ✨
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center' }}>
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('balloons')}
        >
          Pop Some Love 🎈
        </motion.button>
      </div>
      
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 50,
              padding: '24px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              style={{
                background: selectedImage.color,
                borderRadius: '24px',
                padding: '48px',
                maxWidth: '600px',
                width: '100%',
                border: '4px solid white',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontSize: '6rem', textAlign: 'center', marginBottom: '32px' }}>💝</div>
              <p style={{
                color: 'white',
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                textAlign: 'center',
                fontWeight: '600',
                lineHeight: '1.75',
              }}>
                {selectedImage.quote}
              </p>
              <button
                style={{
                  marginTop: '32px',
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  padding: '12px 32px',
                  borderRadius: '9999px',
                  color: 'white',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  width: '100%',
                  cursor: 'pointer',
                  border: 'none',
                }}
                onClick={() => setSelectedImage(null)}
              >
                Close ✨
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GalleryPage;