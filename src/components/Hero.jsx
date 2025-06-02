// components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-white dark:from-gray-900 dark:via-cyan-900 dark:to-gray-800">
      <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
            Empowering Ideas Through Tech
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            We design, build, and scale digital solutions to solve real-world problems.
          </p>
          <button className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition">
            Get Started
          </button>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_myejiggj.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={{ width: '400px', height: '400px' }}
          ></lottie-player>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
