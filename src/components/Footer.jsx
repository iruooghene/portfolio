// src/components/Hero.jsx
import React from "react"
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-2 md:mb-0">© {new Date().getFullYear()} Cynthia Eboh. All rights reserved.</p>
                <div className="flex gap-4">
                    <a
                        href="https://github.com/your-github-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:cynthiaeboh1@gmail.com"
                        className="hover:text-blue-400 transition"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
