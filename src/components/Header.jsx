import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Generate random positions and speeds for binary digits
  const [binaryDigits, setBinaryDigits] = useState([]);

  useEffect(() => {
    const digits = Array.from({ length: 50 }).map(() => ({
      id: Math.random(),
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 5}s`,
      value: Math.random() > 0.5 ? "0" : "1",
    }));
    setBinaryDigits(digits);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-lg">
      {/* Animated Binary Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        {binaryDigits.map((digit) => (
          <span
            key={digit.id}
            className="absolute text-cyan-600 text-sm font-mono animate-bits"
            style={{
              top: digit.top,
              left: digit.left,
              animation: `floatBits ${digit.duration} linear ${digit.delay} infinite alternate`,
            }}
          >
            {digit.value}
          </span>
        ))}
      </div>

      <nav className="container mx-auto flex justify-between items-center p-4 relative z-10">
        {/* Logo */}
        <div className="text-4xl font-extrabold text-cyan-400 hover:text-cyan-500 transition duration-300">
          <Link to="/">Portfolio</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "CodingProfile", "Projects", "Contact", "Fun"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative text-white hover:text-cyan-400 text-lg font-medium transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 bottom-[-2px] w-0 h-1 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-cyan-400 transition duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* Background Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-16 left-0 w-full bg-black/90 backdrop-blur-lg md:hidden"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul className="flex flex-col items-center p-6 space-y-4">
              {["Home", "About", "Skills", "CodingProfile", "Projects", "Contact", "Fun"].map((item, index) => (
                <li key={index} className="w-full text-center">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="relative block text-white hover:text-cyan-400 text-2xl font-medium py-2 transition duration-300 group"
                    onClick={closeMenu}
                  >
                    {item}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-1 bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @keyframes floatBits {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
          100% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        `}
      </style>
    </header>
  );
}

export default Header;