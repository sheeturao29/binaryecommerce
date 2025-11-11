import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import { model9 } from "../assests";

const Hero = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate function

  return (
    <section className="relative w-full h-[450px] overflow-hidden mt-16">
      {/* Background Image with Motion */}
      <motion.img
        src={model9}
        alt="Hero Background"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text and CTA */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          ELEVATE YOUR WARDROBE
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-white">
          2025 STYLE REVOLUTION!
        </p>

        {/* Shop Button */}
        <button
          onClick={() => navigate("/shop")} // ✅ Now this works
          className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition shadow-lg"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
