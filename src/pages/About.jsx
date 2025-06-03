import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#F8F9FB] dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Lottie on Left */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_pwohahvd.json"
            background="transparent"
            speed="1"
            loop
            autoplay
             className="w-50 h-40  md:w-66 md:h-56 lg:w-74 lg:h-64 xl:w-90 xl:h-80"
          ></lottie-player>
        </motion.div>

        {/* Text on Right */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          whileHover={{ scale: 1.05, rotateY: -5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
            At CodeNova, we’re passionate about using cutting-edge technologies to craft solutions that matter.
            From responsive websites to 3D experiences and automation tools, we bring your ideas to life.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">
            Our team thrives on innovation and collaboration, helping startups and enterprises grow in the digital world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
