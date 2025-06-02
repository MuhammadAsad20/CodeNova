import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F9FB] dark:bg-gray-900">
      <div className="container mx-auto px-5 max-w-6xl">
        <motion.h2
          className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_tfb3estd.json"
              background="transparent"
              speed="1"
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
              loop
              autoplay
            ></lottie-player>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="text-center text-cyan-700 dark:text-cyan-300 font-semibold text-xl">
                Thanks for contacting us! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="border border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="border border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="border border-cyan-300 dark:border-cyan-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                />
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-cyan-600"
                  />
                  <span className="text-cyan-700 dark:text-cyan-200 font-medium">Subscribe to our Newsletter</span>
                </label>
                <button
                  type="submit"
                  className="bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-700 transition"
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
