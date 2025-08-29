import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="bg-white text-gray-800 py-16 px-8 md:px-20 flex flex-col items-center"
        >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="max-w-3xl text-center text-lg leading-relaxed">
                Hello! I’m <span className="font-semibold">Iruooghene Victoria Eboh</span>, a passionate Cloud Engineer and DevOps Enthusiast.
                I love building cloud-native solutions, automating workflows, and helping teams scale efficiently.
                I have experience working with cloud platforms like AWS, Docker, Terraform, CI/CD, and monitoring tools.
                When I’m not in tech mode, I enjoy learning new things, reading, and listening to music.
            </p>
        </section>
    );
};

export default About;
