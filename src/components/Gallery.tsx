import React from "react";
import { motion } from "framer-motion";
// @ts-ignore
import img1 from "../assets/images/1.jpeg";
// @ts-ignore
import img2 from "../assets/images/2.jpeg";
// @ts-ignore
import img3 from "../assets/images/3.jpeg";
// @ts-ignore
import img4 from "../assets/images/4.jpeg";
// @ts-ignore
import img5 from "../assets/images/5.jpeg";
// @ts-ignore
import img6 from "../assets/images/6.jpeg";
// @ts-ignore
import img7 from "../assets/images/7.jpeg";
// @ts-ignore
import img8 from "../assets/images/8.jpeg";
// @ts-ignore
import img9 from "../assets/images/9.jpeg";
// @ts-ignore
import img10 from "../assets/images/10.jpeg";
// @ts-ignore
import img11 from "../assets/images/11.jpeg";
// @ts-ignore
import img12 from "../assets/images/12.jpeg";
// @ts-ignore
import img13 from "../assets/images/13.jpeg";
// @ts-ignore
import img14 from "../assets/images/14.jpeg";
// @ts-ignore
import img15 from "../assets/images/15.jpeg";
// @ts-ignore
import img16 from "../assets/images/16.jpeg";
// @ts-ignore
import img17 from "../assets/images/17.jpeg";
// @ts-ignore
import img18 from "../assets/images/18.jpeg";
// @ts-ignore
import img19 from "../assets/images/19.jpeg";
// @ts-ignore
import img20 from "../assets/images/20.jpeg";
import { i } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];
// import {1} from "../images/1.jpeg";
export default function Gallery() {
  const navigate = useNavigate();
  return (
    <div className="bg-pink-100">
      <div
        className="min-h-screen flex flex-wrap justify-center items-center gap-8 bg-pink-100 p-10"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-60 h-80 bg-white shadow-xl rounded-md p-2"
            initial={{ rotate: index % 2 === 0 ? -5 : 5 }} // Slight tilt
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              transform: `rotate(${index % 2 === 0 ? "-5deg" : "5deg"})`,
            }}
          >
            {/* Red Pin */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full shadow-md border-2 border-red-900"></div>

            {/* Polaroid Photo */}
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              className="w-full h-3/4 object-cover rounded-md"
            />

            {/* Caption */}
            <p className="text-center text-lg mt-2 text-gray-700 font-bold">
              Memory {index + 1}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.button
          onClick={() => navigate("/playlist")}
          className="mt-10 px-6 py-3 bg-[#FF6B81] text-white text-xl rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          Listen to Our Playlist 🎶
        </motion.button>
      </div>
    </div>
  );
}
