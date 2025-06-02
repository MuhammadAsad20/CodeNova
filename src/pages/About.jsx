// components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#F8F9FB] dark:bg-gray-900">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_pwohahvd.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={{ width: '500px', height: '500px' }}
          ></lottie-player>
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg mb-4">
            At TechVerse, we’re passionate about using cutting-edge technologies to craft solutions that matter.
            From responsive websites to 3D experiences and automation tools, we bring your ideas to life.
          </p>
          <p className="text-gray-400">
            Our team thrives on innovation and collaboration, helping startups and enterprises grow in the digital world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
