// components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-white dark:from-gray-900 dark:via-cyan-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
            Empowering Ideas Through Tech
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6">
            We design, build, and scale digital solutions to solve real-world problems.
          </p>
          <button className="bg-cyan-500 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:bg-cyan-600 transition text-sm sm:text-base">
            Get Started
          </button>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
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
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px]"
          ></lottie-player>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
