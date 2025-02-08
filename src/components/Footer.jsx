import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
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
    <footer className="relative bg-black bg-opacity-80 backdrop-blur-md p-6 text-white shadow-lg overflow-hidden">
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

      <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-extrabold mb-4 md:mb-0 text-cyan-400 hover:text-cyan-500 transition duration-300">
          <Link to="/">lost set bit</Link>
        </div>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/ashishverma4822"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ashishverma4822"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/vashishk0602"
            className="text-gray-300 hover:text-cyan-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 relative">
        <p className="text-sm md:text-base">© {new Date().getFullYear()} lost set bit. All rights reserved.</p>
      </div>

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
    </footer>
  );
}

export default Footer;
