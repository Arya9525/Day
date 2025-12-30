import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MusicPlayer = ({ isPlaying, resetMusic, toggleMusic }) => {
  const audioRef = useRef(null);

  // Play / Pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // 🔥 RESET MUSIC (when replay happens)
  useEffect(() => {
    if (!audioRef.current) return;

    if (resetMusic) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [resetMusic]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 100,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.6rem",
        }}
        title={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
