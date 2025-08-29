import React from "react"
export default function Contact() {
    return (
        <section id="contact" className="py-12 bg-white">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <p className="text-gray-700 mb-8">
                    Interested in working together or have a question? Feel free to reach out.
                </p>
                <a
                    href="mailto:ebohiruooghene@gmail.com"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
                >
                    📩 Send me an email
                </a>

                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="https://github.com/iruooghene"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                    >
                        🌐 GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/iruooghene-eboh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition"
                    >
                        💼 LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
