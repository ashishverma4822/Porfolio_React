import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/bg7.jpg";
import backgroundImage from "../assets/bg.jpg";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative container mx-auto max-w-5xl text-white text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image with Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center justify-center w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60"
          >
            <img
              src={profileImage}
              alt="Ashish Kumar Verma"
              className="w-full h-full rounded-xl object-cover border-4 border-cyan-500 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
            />
          </motion.div>

          {/* About Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I’m <span className="text-cyan-400 font-semibold">Ashish Kumar Verma</span>, a <strong>MERN Stack Developer</strong> passionate about crafting scalable and modern web applications. 🚀
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I am a backend developer who loves solving challenging problems and continuously enhancing my skills. 💡
            </motion.p>

            {/* Coding Platform Links with Hover Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-cyan-400 font-semibold">Find me on:</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                {[
                  { name: "LeetCode", url: "https://leetcode.com/vashishk0602/", color: "bg-blue-500" },
                  { name: "HackerRank", url: "https://www.hackerrank.com/vashishk2003", color: "bg-green-500" },
                  { name: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/vashishk0602", color: "bg-orange-500" },
                  { name: "GitHub", url: "https://github.com/ashishverma4822", color: "bg-gray-700" },
                ].map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    className={`${platform.color} text-white px-5 py-2 rounded-lg hover:brightness-125 transition duration-300 text-sm md:text-base shadow-lg hover:shadow-xl hover:shadow-cyan-400/50`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {platform.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
