import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "AWS Infrastructure Automation",
            description:
                "Automated deployment of cloud resources using Terraform and integrated monitoring with Prometheus and Grafana.",
            link: "https://github.com/yourusername/aws-infra-automation",
        },
        {
            title: "CI/CD Pipeline Setup",
            description:
                "Built and deployed a CI/CD pipeline using GitHub Actions, Docker, and EC2 for seamless deployments.",
            link: "https://github.com/yourusername/cicd-pipeline",
        },
        {
            title: "Marble Deployment",
            description:
                "Containerized and deployed Marble project with MinIO, PostgreSQL, and Convoy on a VPS using Docker Compose.",
            link: "https://github.com/yourusername/marble-deployment",
        },
    ];

    return (
        <section
            id="projects"
            className="bg-white text-gray-800 py-16 px-8 md:px-20 flex flex-col items-center"
        >
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
