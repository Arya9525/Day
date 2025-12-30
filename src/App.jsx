import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./components/LandingPage";
import BirthdayPage from "./components/BirthdayPage";
import GalleryPage from "./components/GalleryPage";
import BalloonsPage from "./components/BalloonsPage";
import FinalPage from "./components/FinalPage";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [musicStarted, setMusicStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const navigate = (page) => setCurrentPage(page);

  const startMusic = () => {
    setMusicStarted(true);
    setIsPlaying(true);
  };

  const toggleMusic = () => setIsPlaying((prev) => !prev);

  return (
    <div className="font-sans min-h-screen w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; margin: 0; overflow-x: hidden; }
        * { box-sizing: border-box; }
      `}</style>

      {musicStarted && (
        <MusicPlayer
          isPlaying={isPlaying}
          toggleMusic={toggleMusic}
        />
      )}

      <AnimatePresence mode="wait">
        {currentPage === "landing" && (
          <LandingPage
            key="landing"
            navigate={navigate}
            startMusic={startMusic}
          />
        )}

        {currentPage === "birthday" && (
          <BirthdayPage key="birthday" navigate={navigate} />
        )}

        {currentPage === "gallery" && (
          <GalleryPage key="gallery" navigate={navigate} />
        )}

        {currentPage === "balloons" && (
          <BalloonsPage key="balloons" navigate={navigate} />
        )}

        {currentPage === "final" && (
          <FinalPage key="final" navigate={navigate} />
        )}
      </AnimatePresence>
    </div>
  );
}
