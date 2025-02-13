import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Surprise() {
  const [noCount, setNoCount] = useState(0);

  // Open WhatsApp with a pre-filled message
  const handleYesClick = () => {
    const phoneNumber = "919712792510";
    const message = encodeURIComponent("Yes, love ❤️");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-pink-100 p-10 text-center"
      style={{ fontFamily: "Dancing Script, cursive" }}
    >
      {/* Romantic Card */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-3xl text-blushRed font-bold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        💌 Will you be my Valentine? 💖
      </motion.div>

      {/* Buttons */}
      <div className="flex gap-6 mt-6">
        {/* Yes Button */}
        <motion.button
          onClick={handleYesClick}
          className="px-6 py-3 bg-green-500 text-white text-xl rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Yes 💕
        </motion.button>

        {/* No Button (Playful Effect) */}
        <motion.button
          onClick={() => setNoCount(noCount + 1)}
          className="px-6 py-3 bg-gray-400 text-white text-xl rounded-full shadow-lg"
          animate={{
            x: noCount * (Math.random() > 0.5 ? 20 : -20),
            y: noCount * (Math.random() > 0.5 ? 20 : -20),
            scale: noCount > 2 ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          No 😢
        </motion.button>
      </div>
    </div>
  );
}
