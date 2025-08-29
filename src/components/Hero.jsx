import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#fdf7f5] min-h-screen">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Hi, I’m <span className="text-red-600">Iruooghene Victoria Eboh</span>
                </h1>
                <p className="text-xl text-gray-700 mt-2">Cloud Engineer | DevOps Enthusiast</p>
                <p className="mt-4 text-gray-600">
                    Passionate about cloud-native solutions, automation, and scaling workflows efficiently.
                </p>
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                    <a href="https://linkedin.com/in/iruooghene_Eboh" target="_blank" className="text-2xl text-gray-800 hover:text-red-600">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/iruooghene" target="_blank" className="text-2xl text-gray-800 hover:text-red-600">
                        <FaGithub />
                    </a>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
                >
                    Say Hello
                </motion.button>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="relative rounded-full w-60 h-60 md:w-72 md:h-72 bg-red-200 flex items-center justify-center shadow-lg">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="rounded-full w-56 h-56 md:w-64 md:h-64 object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
