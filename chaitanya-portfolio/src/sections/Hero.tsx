import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id='home' className="min-h-screen flex items-center">
            <motion.div
                className="max-w-6xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-indigo-400 text-sm mb-4">
                    Hi, my name is
                </p>
                <h1 className="text-4xl font-bold md:text-6xl leading-tight">
                    Sai Chaitanya
                </h1>

                <h2 className="text-3xl font-bold md:text-5xl text-gray-400 mt-2">
                    I build modern web applications.
                </h2>

                <p className="max-w-xl mt-6 text-gray-400">
                    I'm a frontend developer specializing in React.js, Next.js, TypeScript, JavaScript and modern web technologies.
                    I love building clean, user-friendly interfaces.
                </p>

                <a
                    href="#projects"
                    className="inline-block mt-8 px-6 py-3 border border-indigo-400 text-indigo-400 rounded hover:bg-indigo-400 hover:text-black transition"
                >
                    View My Work
                </a>
            </motion.div>
        </section>
    );
}

export default Hero;