import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const message = `
Hello Pabsy! 
From the moment we met, my world became brighter. 
Every smile, every moment, every little thing about you 
fills my heart with happiness.

On this special day, I just want to remind you how much 
you mean to me. You are my favorite person, my safe place, 
and my greatest adventure. 

Happy Valentine's Day, my love! ❤️

Now, Let's see the 2024 we spent together hhehe
~ Pabs
`;

export default function Letter() {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => {
        if (i < message.length) {
          i++;
          return message.slice(0, i);
        } else {
          clearInterval(interval);
          setIsComplete(true); // ✅ Set completion state
          return prev;
        }
      });
    }, 50); // Faster typing effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-paperWhite text-blush-red p-6 text-center"
      style={{ fontFamily: "Dancing Script, cursive" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-3xl md:text-5xl leading-relaxed max-w-3xl"
      >
        {displayText}
      </motion.p>

      {isComplete && ( // ✅ Only show button when typing is fully complete
        <motion.button
          onClick={() => navigate("/gallery")}
          className="mt-6 px-6 py-3 bg-blushRed text-black text-xl rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontFamily: "Dancing Script, cursive" }} // ✅ Keeps inline styling
        >
          View Our Memories 📸
        </motion.button>
      )}
    </div>
  );
}
