import skills from "../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="py-24">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => {
                        return (
                            <span
                                key={skill}
                                className="px-4 py-2 text-sm rounded-full border border-white/10 text-gray-300 hover:border-indigo-400 hover:text-indigo-400 hover:-translate-y-0.5 transition transform">
                                {skill}
                            </span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;