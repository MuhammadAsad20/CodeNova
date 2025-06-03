// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import vr from '../../public/vr.png';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = activeId;
      for (const { id } of navLinks) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeId]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <div onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-2 cursor-pointer">
          <img src={vr} alt="logo" className="w-10 h-10 object-contain" />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-extrabold text-cyan-500 dark:text-cyan-400"
          >
            CodeNova
          </motion.span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ id, label }) => (
            <li key={id} className="relative group">
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`transition-colors font-medium duration-300 ${
                  activeId === id
                    ? 'text-cyan-500 dark:text-cyan-400'
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-300 transition-all duration-300 transform ${
                    activeId === id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-white rounded-sm mb-1"
            animate={isOpen ? { rotate: 45, x: 2, y: 6 } : { rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white rounded-sm mb-1"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white rounded-sm"
            animate={isOpen ? { rotate: -45, x: 2, y: -6 } : { rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-cyan-700 overflow-hidden rounded-b-lg shadow-lg"
      >
        {navLinks.map(({ id, label }) => (
          <li key={id} className="border-b border-cyan-600">
            <a
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`block px-5 py-3 font-medium ${
                activeId === id
                  ? 'text-cyan-200 bg-cyan-800'
                  : 'text-white hover:bg-cyan-600'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
