// components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeScaleVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F9FB] dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-10 text-center"
          variants={fadeScaleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}  // repeat animation on every view
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Lottie Animation */}
          <motion.div
            className="w-full flex justify-center"
            variants={fadeScaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}  // repeat animation
          >
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_tfb3estd.json"
              background="transparent"
              speed="1"
              loop
              autoplay
               className="w-50 h-40  md:w-66 md:h-56 lg:w-74 lg:h-64 xl:w-90 xl:h-80"
            ></lottie-player>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeScaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}  // repeat animation
          >
            {submitted ? (
              <div className="text-center text-cyan-700 dark:text-cyan-300 font-semibold text-lg sm:text-xl">
                Thanks for contacting us! We'll get back to you soon.
              </div>
            ) : (
              <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="border border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="border border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="border border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none text-sm sm:text-base"
                />
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-cyan-600"
                  />
                  <span className="text-sm sm:text-base text-cyan-700 dark:text-cyan-200 font-medium">
                    Subscribe to our Newsletter
                  </span>
                </label>
                <button
                  type="submit"
                  className="bg-cyan-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:bg-cyan-700 transition text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
