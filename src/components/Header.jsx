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
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      setDarkMode(true);
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        closeMenu();
      }, 300);
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
    <nav className="fixed w-full bg-transparent text-white z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo + Brand with Theme Toggle on Image Click */}
        <div
          
          className="flex items-center gap-1 cursor-pointer"
        >
          <img
            src={vr}
            alt="Logo"
            className="w-6 h-6 md:w-10 md:h-10"
            onClick={(e) => {
            toggleTheme();
          }}
          />
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="text-lg md:text-2xl lg:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 hover:text-gray-700 dark:hover:text-white transition"
          onClick={(e) => {
            handleNavClick(e, 'hero');
          }}
            >
            CodeNova
          </motion.span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8">
          {navLinks.map(({ id, label }) => (
            <li key={id} className="relative group">
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`relative transition-colors duration-300 ${
                  activeId === id
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                } text-sm  lg:text-lg`}
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

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex justify-center items-center w-8 h-8 text-xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.i
            key={isOpen ? 'close' : 'open'}
            className={`fas ${isOpen ? 'fa-xmark' : 'fa-bars'} text-black dark:text-white`}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={isOpen ? { maxHeight: 300, opacity: 1 } : { maxHeight: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden bg-cyan-700 w-full"
      >
        {navLinks.map(({ id, label }) => (
          <li key={id} className="border-b border-cyan-600">
            <a
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`block px-4 py-3 text-base transition ${
                activeId === id ? 'text-cyan-300 underline' : 'text-white hover:bg-cyan-600'
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
