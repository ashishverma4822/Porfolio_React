import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const quotes = [
    "Believe in yourself and all that you are!",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "It always seems impossible until it's done.",
    "The mind is everything. What you think you become.",
    "Strive not to be a success, but rather to be of value.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  
    // Hindi Quotes
    "मन के हारे हार है, मन के जीते जीत।", // "Man ke haare haar hai, man ke jeete jeet." - If you lose heart, you are defeated; if you have heart, you are victorious.
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।", // "Karmanye vadhikaraste Ma Phaleshu Kadachana" - You have the right to work, but never to the fruit thereof. (Bhagavad Gita)
    "जो होता है, अच्छे के लिए होता है।", // "Jo hota hai, achche ke liye hota hai." - Whatever happens, happens for the best.
      "डर के आगे जीत है।" , // "Dar ke aage jeet hai" - Victory lies beyond fear.
  
    // Sanskrit Quotes
    "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।", // "Udyamena hi sidhyanti karyani na manorathaih" - Efforts lead to success, not just wishful thinking.
    "विद्या ददाति विनयं", // "Vidya dadati vinayam" - Knowledge gives humility.
    "आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः", // "Atmaiva hyatmano bandhuratmaiva ripuratmanah" -  You are your own best friend and your worst enemy
     "योगस्थः कुरु कर्माणि", // "Yogasthah kuru karmani" - Perform your duties being steadfast in yoga.
  
    // Quotes from Bhagavad Gita (Shlokas - Verses)
    "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते | सङ्गात्संजायते कामः कामात्क्रोधोऽभिजायते ||", //Dhyayato vishayanpunsah sangastesupajayate, Sangatsanjayate kamah kamatkrodhoabhijayate|| - While dwelling on objects, attachment to them is developed; from attachment desire arises, and from desire anger is born. (Bhagavad Gita, 2.62)
    "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः | स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||", //Krodhad bhavati sammohah sammohat smritivibhramah, Smritibhramshad buddhinaso buddhinasat pranashyati - From anger arises delusion; from delusion, loss of memory; from loss of memory, the destruction of discrimination; from the destruction of discrimination, he perishes.(Bhagavad Gita, 2.63)
  ];
  

const FunSection = () => {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    const userName = prompt("What's your name?");
    if (userName) {
      setName(userName);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black via-cyan-900 to-gray-800 text-white overflow-hidden relative">
      {/* Floating Binary Strings */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-200 text-lg opacity-30 font-mono"
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{
              y: "110vh",
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
            style={{
              left: `${Math.random() * 100}vw`
            }}
          >
            {Array.from({ length: 1 }, () =>
              Math.random() > 0.5 ? "11000001 1111001 1110101" : "1000001 1111001 1110101"
            ).join(" ")}
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="text-5xl font-extrabold text-center z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get Your Quote of the Day!
      </motion.h1>

      <motion.button
        onClick={handleClick}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg rounded-full flex items-center gap-3 shadow-lg transition-all hover:shadow-yellow-400 hover:scale-110 relative overflow-hidden"
        whileHover={{ scale: 1.2, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaQuoteRight className="text-2xl" /> Inspire Me
        <motion.div
          className="absolute inset-0 bg-yellow-300 opacity-20 blur-lg"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      {quote && (
        <motion.div
          className="mt-6 text-2xl font-medium italic text-center max-w-2xl p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md z-10 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
          >
            {name && (
              <span className="font-bold text-yellow-400">{name}, </span>
            )}
            {quote.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
      )}

      {/* "Propose Me for Fun" Link with Fade-Out Effect on Hover */}
      <motion.a
        href="https://www.linkedin.com/in/ashishverma4822"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-6 text-sm text-gray-300 transition-all"
        whileHover={{ opacity: 0 }}
      >
        <b>💍 Propose Me </b>
      </motion.a>
    </div>
  );
};

export default FunSection;
