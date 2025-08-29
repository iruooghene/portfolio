import React from "react";

const Skills = () => {
    const skills = [
        "AWS",
        "Docker",
        "Terraform",
        "CI/CD",
        "Linux",
        "PostgreSQL",
        "Monitoring & Logging",
        "Java",
        "Bash Scripting",
        "Git & GitHub",
    ];

    return (
        <section
            id="skills"
            className="bg-gray-100 text-gray-800 py-16 px-8 md:px-20 flex flex-col items-center"
        >
            <h2 className="text-3xl font-bold mb-6">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-4 text-center text-lg font-medium hover:shadow-xl transition-shadow"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
