import { motion } from "framer-motion";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    size: 24 + Math.random() * 20,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <div
      style={{
        position: "fixed",          // ✅ full screen
        inset: 0,                   // ✅ top, right, bottom, left = 0
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 4,                  // behind text, above background
      }}
    >
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          style={{
            position: "absolute",
            left: `${h.left}%`,
            bottom: "-60px",
            fontSize: `${h.size}px`,
          }}
          animate={{
            y: [-60, -window.innerHeight - 100],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          💕
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
