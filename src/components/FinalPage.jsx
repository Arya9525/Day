import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "./Confetti";
import FloatingHearts from "./FloatingHearts";

const FinalPage = ({ navigate }) => {
  const message =
    "On your birthday and every day… I choose you, I love you, and I adore you ❤️";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [index, message]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #fb7185, #f472b6, #a855f7)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <Confetti />
      <FloatingHearts />

      <div
        style={{
          textAlign: "center",
          padding: "24px",
          zIndex: 10,
          maxWidth: "900px",
        }}
      >
        {/* Heart Animation */}
        <motion.div
          style={{ fontSize: "6rem", marginBottom: "48px" }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💖
        </motion.div>

        {/* Message Box */}
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(12px)",
            borderRadius: "24px",
            padding: "40px",
            marginBottom: "40px",
            border: "3px solid rgba(255,255,255,0.5)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
          }}
        >
          <p
            style={{
              fontSize: "2rem",
              color: "white",
              fontWeight: "600",
              minHeight: "160px",
              lineHeight: "1.5",
            }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              |
            </motion.span>
          </p>
        </div>

        {/* Button */}
        <motion.button
          style={{
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(10px)",
            padding: "16px 48px",
            borderRadius: "999px",
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "600",
            border: "2px solid rgba(255,255,255,0.6)",
            cursor: "pointer",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("landing")}
        >
          Replay the Magic 💞
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FinalPage;
