import projects from "../data/projects";
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-gray-900/40">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project) => {
                        return (
                            <motion.div
                                key={project.title}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.2 }}
                                className="group p-6 rounded-xl border border-white/10 bg-gray-950 hover:border-indigo-400"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <ul className="text-sm text-gray-400 space-y-2 mb-4 list-disc list-inside">
                                    {project.highlights.map((highlight) => {
                                        return (
                                            <li key={highlight}>{highlight}</li>
                                        );
                                    })}
                                </ul>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => {
                                        return (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                                <div className="flex">
                                    {project.githubRepo && (
                                        <a
                                            href={project.githubRepo}
                                            target="_blank"
                                            className="text-sm text-indigo-400 hover:underline"
                                        >
                                            Github →
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Projects;