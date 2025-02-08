import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import bgImage from "../assets/bg.jpg";

const leetCodeApi = "https://leetcode-stats-api.herokuapp.com/vashishk0602";

const platforms = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/vashishk0602/",
    color: "#FFA500",
    rating: "1814",
    solved: "Loading...",
  },
  {
    name: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/vashishk0602/",
    color: "#32CD32",
    rating: "1843",
    solved: "500+",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/vashishk0602",
    color: "#8A2BE2",
    rating: "1615",
    solved: "200+",
  },
];

const CodingProfile = () => {
  const [leetCodeStats, setLeetCodeStats] = useState(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(leetCodeApi);
        const data = await response.json();
        setLeetCodeStats({
          solved: data.totalSolved,
          totalQuestions: data.totalQuestions,
          rating: data.rating,
        });
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6 p-20 bg-zinc-800 text-white rounded-lg shadow-lg relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="w-full text-center text-3xl font-bold mb-6 text-blue-400">Coding Profile</h2>

      {platforms.map((platform, index) => (
        <motion.div
          key={index}
          className="w-80 p-6 bg-zinc-900 bg-opacity-50 rounded-lg shadow-xl relative flex flex-col items-center backdrop-blur-md border-2 border-transparent"
          whileHover={{
            scale: 1.05,
            boxShadow: `0px 0px 15px ${platform.color}`,
          }}
          animate={{
            borderColor: [platform.color, "transparent"],
            boxShadow: [`0px 0px 10px ${platform.color}`, "0px 0px 5px transparent"],
          }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <h3 className="text-xl font-semibold text-blue-300">{platform.name}</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={[
                {
                  name: "Solved",
                  value: platform.name === "LeetCode" && leetCodeStats ? leetCodeStats.solved : parseInt(platform.solved),
                },
              ]}
            >
              <XAxis dataKey="name" stroke="#ddd" />
              <YAxis stroke="#ddd" />
              <Tooltip contentStyle={{ backgroundColor: "#333", borderRadius: "8px", color: "#fff" }} />
              <Bar dataKey="value" fill={platform.color} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <p className="text-white text-lg mt-2">
            Rating: <span className="text-green-400 font-bold">{leetCodeStats && platform.rating}</span>
          </p>

          <motion.a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
          >
            View Profile
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CodingProfile;
