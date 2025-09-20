import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaCuttlefish,
  FaNodeJs,
  FaNetworkWired,
  FaCogs,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiWindows, SiSpring } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaCuttlefish />, title: "C++", description: "High-performance coding with OOP and STL." },
    { icon: <FaCuttlefish />, title: "C", description: "Efficient low-level programming and system design." },
    { icon: <FaJs />, title: "JavaScript", description: "Powering interactive web applications with ES6+." },
    { icon: <FaPython />, title: "Python", description: "Data science, AI, and automation scripting." },
    { icon: <FaNodeJs />, title: "Node.js", description: "Backend development with scalable JavaScript runtime." },
    { icon: <FaDatabase />, title: "SQL", description: "Query optimization and relational database design." },
    { icon: <SiMongodb />, title: "MongoDB", description: "NoSQL database for high-performance applications." },
    { icon: <FaHtml5 />, title: "HTML", description: "Semantic and accessible web structures." },
    { icon: <FaCss3Alt />, title: "CSS", description: "Advanced responsive layouts with animations." },
    { icon: <SiTailwindcss />, title: "Tailwind CSS", description: "Rapid UI development with utility classes." },
    { icon: <FaReact />, title: "React.js", description: "Building dynamic and fast user interfaces." },
    { icon: <FaNetworkWired />, title: "Computer Networks", description: "Networking protocols, OSI model & TCP/IP." },
    { icon: <SiWindows />, title: "Operating Systems", description: "Process management, memory & OS concepts." },
    { icon: <FaCogs />, title: "OOPs", description: "Object-oriented programming principles & design." },
    { icon: <FaDatabase />, title: "DBMS", description: "Efficient data modeling and database management." },
    { icon: <FaJava />, title: "Java", description: "Robust backend development and enterprise applications." },
    { icon: <SiSpring />, title: "Spring Boot", description: "Rapid development with production-ready Spring applications." },
    { icon: <SiSpring />, title: "Spring", description: "Comprehensive framework for enterprise Java applications." }
  ];

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6 p-16 bg-zinc-800 text-white rounded-lg shadow-lg relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-cyan-400 mb-10 tracking-wide mt-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/90 p-4 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300 transform relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
              backgroundColor: "rgba(0, 255, 255, 0.15)",
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            {/* Animated Icon */}
            <motion.div
              className="text-4xl text-cyan-400"
              initial={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 360, scale: 1.3 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {skill.icon}
            </motion.div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <p className="text-gray-300 text-sm">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
