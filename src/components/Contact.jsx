import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import bgImage from "../assets/bg.jpg";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundBlendMode: "overlay", opacity: 0.9 }}
    >
      <div className="container mx-auto my-2 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center relative">
        
        {/* Left Side - Social Media */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-right pr-10 mb-10 md:mb-0">
          <motion.h2
            className="text-4xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Connect with Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's connect on social media!
          </motion.p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ashishverma4822" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ashishverma4822" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/vashishk0602" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-blue-500 transition">
              <FaTwitter />
            </a>
            <a href="mailto:vashishk2003@gmail.com" className="text-white text-3xl hover:text-blue-500 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <motion.div
          className="hidden md:block w-1 h-64 bg-blue-500 rounded-lg mx-10"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 text-left pl-10 mx-2 mt-5">
          <motion.h2
            className="text-4xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Me
          </motion.h2>
          <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input type="hidden" name="access_key" value="5ccc6ac8-478b-4fef-82e9-b5714ebba614" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="block w-full p-3 mb-4 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="block w-full p-3 mb-4 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="block w-full p-3 mb-4 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-full relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-lg"></span>
              <span className="relative z-10">Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
