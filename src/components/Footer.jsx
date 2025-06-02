// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-cyan-100 to-white dark:from-gray-900 dark:via-cyan-900 dark:to-gray-800 text-cyan-700 dark:text-cyan-200 py-6 text-center text-sm">
      <div className="container mx-auto px-5">
        &copy; {new Date().getFullYear()} TechVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
