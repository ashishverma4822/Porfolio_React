import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images.jpg";
import bgImage from "../assets/bg.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const binaryString = " 1000001 1111001 1110101";

function Home() {
  const [radius, setRadius] = useState(100);

  useEffect(() => {
    const updateRadius = () => {
      const screenWidth = window.innerWidth;
    
      if (screenWidth < 480) {
        setRadius(90); // Extra Small Screens (Phones in portrait mode)
      } else if (screenWidth < 640) {
        setRadius(90); // Small Screens (Small phones in landscape mode)
      } else if (screenWidth < 768) {
        setRadius(90); // Medium-Small Screens (Tablets in portrait mode)
      } else if (screenWidth < 1024) {
        setRadius(120); // Large Tablets & Small Laptops
      } else if (screenWidth < 1280) {
        setRadius(120); // Standard Laptops
      } else if (screenWidth < 1536) {
        setRadius(120); // Large Laptops & Small Desktops
      } else {
        setRadius(120); // Ultra-Wide Screens (Large Monitors)
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const getRotationAngle = () => 360 / binaryString.length;

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen text-white pt-24 md:pt-32 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="text-center px-6 md:px-12 relative">
        <motion.div
          className="relative inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto">
            <div className="absolute inset-0 rounded-full border-0 border-blue-500 p-1"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-300 p-2 flex items-center justify-center">
              <img
                src={profileImage}
                alt="Ashish Kumar Verma"
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {Array.from(binaryString).map((char, index) => (
                <motion.span
                  key={index}
                  className="absolute text-blue-200 text-sm font-mono"
                  style={{
                    transform: `rotate(${index * getRotationAngle()}deg) translate(${radius}px) rotate(-${index * getRotationAngle()}deg)`,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm Ashish Kumar Verma
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Competitive Programmer | Backend Developer | YouTube : lost set bit
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            href="/about"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold hover:from-indigo-600 hover:to-blue-500 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Know Me Better
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/16DqiHpeNzZ0QsorCQ1UEu8wSbJ-XJxLa/view?usp=drive_link"
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white font-semibold hover:from-teal-600 hover:to-green-500 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        <div className="flex justify-center space-x-6 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/ashishverma4822"
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://github.com/vashishk0602"
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://x.com/vashishk0602"
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="Twitter"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter size={30} />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@vashishk0602"
            className="text-gray-300 hover:text-white transition duration-300"
            aria-label="YouTube"
            whileHover={{ scale: 1.1 }}
          >
            <FaYoutube size={30} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Home;
