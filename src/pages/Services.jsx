// components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

import automationData from '../assets/automation.json'; // Local JSON import

const services = [
  {
    title: 'Web Development',
    description: 'Responsive, modern websites tailored to your needs.',
    iconType: 'url',
    icon: 'https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user experiences.',
    iconType: 'url',
    icon: 'https://assets5.lottiefiles.com/packages/lf20_h4th9ofg.json',
  },
  {
    title: 'Automation',
    description: 'Automate workflows and boost productivity.',
    iconType: 'local',
    iconData: automationData,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-cyan-100 to-white dark:from-gray-900 dark:via-cyan-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-12">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-12">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              className="w-full md:w-1/3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-lg p-6 shadow-lg flex flex-col items-center mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.3 }}
              viewport={{ once: true }}
            >
              {srv.iconType === 'url' ? (
                <lottie-player
                  src={srv.icon}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  className="w-50 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
                ></lottie-player>
              ) : (
                <Player
                  autoplay
                  loop
                  src={srv.iconData}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-60 md:h-40 lg:w-70   lg:h-44"
                />
              )}

              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-cyan-700 dark:text-cyan-200 mt-4 mb-2">
                {srv.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
                {srv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
