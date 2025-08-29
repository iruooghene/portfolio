
import React from "react";

export default function Experience() {
    const experiences = [
        {
            role: "Cloud Engineer Intern",
            company: "Semicolon Africa",
            date: "Jan 2025 - Feb 2025",
            details: [
                "Assisted in deploying and managing cloud infrastructure on AWS.",
                "Configured and maintained services like EC2, S3, and IAM.",
                "Worked with Docker containers and automated deployments.",
                "Participated in system monitoring and troubleshooting."
            ]
        },
        {
            role: "AWS Cloud Training Program",
            company: "TUA Academy",
            date: "Feb 2025",
            details: [
                "Completed a 1-month intensive AWS cloud training program.",
                "Gained hands-on experience with core AWS services.",
                "Worked on real-world projects and practical AWS labs."
            ]
        }
    ];

    return (
        <section id="experience" className="py-12 bg-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                            <p className="text-gray-700">{exp.company}</p>
                            <p className="text-sm text-gray-500 mb-3">{exp.date}</p>
                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                                {exp.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
