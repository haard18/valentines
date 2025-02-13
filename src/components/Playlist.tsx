import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Playlist() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-pink-100 p-10 text-center"
      style={{ fontFamily: "Dancing Script, cursive" }}
    >
      {/* Animated Heart */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-red-500 text-6xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ❤️
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl text-blushRed font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        All these are for you 🎶
      </motion.h1>

      {/* Playlist Embed */}
      <div className="bg-white p-6 shadow-lg rounded-lg w- h-full">
        <iframe
          className="w-full h-80 rounded-md"
          src="https://open.spotify.com/embed/playlist/3Q6kxN8GoPJ0ghY0AQtNvK?si=EHY5M3udS0y4Jl8bs-uoow&nd=1&dlsi=1d3f3490400244fb"
          allow="encrypted-media"
        ></iframe>
      </div>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/surprise")}
        className="mt-10 px-6 py-3 bg-[#FF6B81] text-white text-xl rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Final Surprise 🎁
      </motion.button>
    </div>
  );
}
