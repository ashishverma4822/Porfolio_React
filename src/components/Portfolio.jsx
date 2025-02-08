import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import bg from "../assets/bg.jpg"; // Import the background image

function Portfolio() {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "A full-stack real-time chat application built using Node.js, Express.js, and Socket.io for instant messaging.",
      link: "https://aa-uchat-0-1.onrender.com/",
    },
    {
      title: "WhatsApp Chat Analyzer",
      description:
        "A Python-based tool using Streamlit to analyze WhatsApp chat data, extract key trends, and provide insightful visualizations.",
      link: "https://github.com/ashishverma4822/Project/tree/main/Whatsapp%20Chat%20Analyzer",
    },
    {
      title: "URL Shortener",
      description:
        "A Node.js and MongoDB-powered URL shortening service to create simplified and shareable links.",
      link: "https://github.com/ashishverma4822/URLShortener-Node.js-.git",
    },
    {
      title: "Text And Speech Tool",
      description:
        "A versatile collection of language processing utilities, including text-to-speech, speech-to-text, and translation tools.",
      link: "https://github.com/ashishverma4822/Project/tree/main/Project%20(22-23)/Final_Prohect_file",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive and interactive portfolio website built with HTML, CSS, and JavaScript to showcase projects and skills.",
      link: "https://ashishverma4822.github.io/portFolio/",
    },
    {
      title: "Scatch Website",
      description:
        "A bags shopping website built using Node.js and EJS for server-side rendering.",
      link: "https://github.com/ashishverma4822/Scatch",
    },
    {
      title: "Password Generator",
      description:
        "A password generator application created using React, allowing users to create secure and random passwords.",
      link: "https://github.com/ashishverma4822/React_with_Coffee-/tree/main/03passwordGenerator",
    },
    {
      title: "PracMate Website",
      description:
        "A React-based website intended for learning purposes.",
      link: "https://prac-mate-react-website.vercel.app/",
    },
    {
      title: "Calculator",
      description:
        "A simple calculator web application built with HTML, CSS, and JavaScript.",
      link: "https://calculator-ashishverma4822.netlify.app/",
    },
    {
      title: "Landing Page",
      description:
        "A visually appealing landing page created with HTML, CSS, and JavaScript, designed to attract and engage users.",
      link: "https://fashion-landing-page-01.netlify.app/",
    },
  ];
  
  

  const getRandomImage = () => {
    const imageURLs = [
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600",

    ];
    return imageURLs[Math.floor(Math.random() * imageURLs.length)];
  };

  const getRandomVideo = () => {
    const videoURLs = [
      "https://videos.pexels.com/video-files/2278095/2278095-sd_640_360_30fps.mp4",
      "https://videos.pexels.com/video-files/853919/853919-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/854322/854322-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/6963744/6963744-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/852292/852292-sd_640_400_25fps.mp4",
      "https://videos.pexels.com/video-files/3130284/3130284-sd_640_360_30fps.mp4",
      "https://videos.pexels.com/video-files/9783697/9783697-sd_960_506_25fps.mp4",
      "https://videos.pexels.com/video-files/5240935/5240935-sd_640_360_30fps.mp4",
    ];
    return videoURLs[Math.floor(Math.random() * videoURLs.length)];
  };

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="py-20 relative text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="container mx-auto text-center px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-cyan-400 mb-12 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/90 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {hoveredProject === index ? (
                <video
                  src={getRandomVideo()}
                  alt={`Video of ${project.title}`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={getRandomImage()}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
