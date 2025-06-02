// components/ServicesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Responsive, modern websites tailored to your needs.',
    icon: 'https://assets8.lottiefiles.com/packages/lf20_jcikwtux.json',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user experiences.',
    icon: 'https://assets5.lottiefiles.com/packages/lf20_h4th9ofg.json',
  },
  {
    title: 'Automation',
    description: 'Automate workflows and boost productivity.',
    icon: 'src/assets/automation.json'

  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-cyan-100 to-white dark:from-gray-900 dark:via-cyan-900 dark:to-gray-800">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-12">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {services.map(({ title, description, icon }, i) => (
            <motion.div
              key={i}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-lg p-6 shadow-lg flex flex-col items-center max-w-sm mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.3 }}
              viewport={{ once: true }}
            >
              <lottie-player
                src={icon}
                background="transparent"
                speed="1"
                style={{ width: '250px', height: '150px' }}
                loop
                autoplay
              ></lottie-player>
              <h3 className="text-2xl font-semibold text-cyan-700 dark:text-cyan-100 mt-4 mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
