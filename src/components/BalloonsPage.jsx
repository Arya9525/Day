import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";

const BalloonsPage = ({ navigate }) => {
  const messages = [
    "Happy Birthday Beautiful 🎂💖",
    "You are so cute 🥰",
    "You are adorable 💕",
    "I love you ❤️",
    "You make every day special ✨",
    "You are my favorite gift 🎁",
    "Today is all about you 🌸",
    "You're amazing 🌟",
    "Forever yours 💑",
    "You complete me 💞",
  ];

  const [balloons, setBalloons] = useState(
    messages.map((msg, i) => ({
      id: i,
      message: msg,
      popped: false,
      x: Math.random() * 80 + 5,
      y: Math.random() * 60 + 10,
    }))
  );

  const [showMessage, setShowMessage] = useState(null);

  // ✅ UPDATED: no auto-close
  const popBalloon = (id, message) => {
    setBalloons((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );
    setShowMessage(message);
  };

  const allPopped = balloons.every((b) => b.popped);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #67e8f9, #93c5fd, #c084fc)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <motion.h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 3.5rem)",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          paddingTop: "48px",
          fontFamily: "Playfair Display, serif",
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Pop the Balloons! 🎈
      </motion.h1>

      <p
        style={{
          color: "white",
          fontSize: "1.25rem",
          textAlign: "center",
          marginTop: "16px",
        }}
      >
        Each balloon holds a special message for you ✨
      </p>

      {/* Balloons */}
      {balloons.map(
        (balloon) =>
          !balloon.popped && (
            <motion.div
              key={balloon.id}
              style={{
                position: "absolute",
                cursor: "pointer",
                fontSize: "5rem",
                left: `${balloon.x}%`,
                top: `${balloon.y}%`,
              }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: balloon.id * 0.2,
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() =>
                popBalloon(balloon.id, balloon.message)
              }
            >
              🎈
            </motion.div>
          )
      )}

      {/* Message Popup */}
      <AnimatePresence>
        {showMessage && (
          <>
            <Confetti />
            <motion.div
              style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 50,
                pointerEvents: "auto", // ✅ allow click
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "24px",
                  padding: "48px",
                  boxShadow:
                    "0 25px 50px rgba(0,0,0,0.3)",
                  border: "4px solid #fbcfe8",
                  maxWidth: "500px",
                  margin: "0 24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#db2777",
                    marginBottom: "24px",
                  }}
                >
                  {showMessage}
                </p>

                <button
                  style={{
                    padding: "10px 30px",
                    borderRadius: "999px",
                    border: "none",
                    background: "#db2777",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow:
                      "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                  onClick={() => setShowMessage(null)}
                >
                  Close ✨
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Final Button */}
      {allPopped && !showMessage && (
        <motion.div
          style={{
            position: "fixed",
            bottom: "48px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.button
            style={{
              background: "rgba(255,255,255,0.3)",
              backdropFilter: "blur(10px)",
              padding: "16px 40px",
              borderRadius: "999px",
              color: "white",
              fontSize: "1.25rem",
              fontWeight: "600",
              border:
                "2px solid rgba(255,255,255,0.5)",
              cursor: "pointer",
              boxShadow:
                "0 25px 50px rgba(0,0,0,0.25)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("final")}
          >
            Final Surprise 💖
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BalloonsPage;
