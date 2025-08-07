import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Contact Us", "Experience"];

  return (
    <header className="absolute w-full z-50 p-4 transition-all duration-300">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8 flex items-center justify-between md:h-20">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
            delay: 0.3,
          }}
          className="flex items-center"
        >
          <h1 className="text-5xl font-extrabold text-white font-serif tracking-wide uppercase drop-shadow-lg">
            Echo
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {menuItems.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.5,
              }}
              key={index}
              href="#"
              className="relative text-lg text-gray-200 hover:text-white transition-colors duration-300 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* GitHub Icon (Desktop only) */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            href="https://github.com/MRIGAANKSh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/20 backdrop-blur-md bg-white/10 text-gray-200 hover:bg-white/20 hover:drop-shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FiGithub className="text-2xl" />
          </motion.a>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-blur-sm px-6 py-4"
          >
            <div className="flex flex-col gap-4 items-start">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white text-lg font-medium w-full border-b border-white/10 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://github.com/MRIGAANKSh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FiGithub className="text-xl" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
