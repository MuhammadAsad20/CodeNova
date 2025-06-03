// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-cyan-100 to-white dark:from-gray-900 dark:via-cyan-900 dark:to-gray-800 text-cyan-700 dark:text-cyan-200 py-6">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base md:text-lg">
          &copy; {new Date().getFullYear()} CodeNova. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
