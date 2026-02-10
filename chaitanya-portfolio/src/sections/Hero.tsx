import { motion } from 'framer-motion';
import profile from '../assets/profile.png'

const Hero = () => {
    return (
        <section id='home' className="min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className='grid md:grid-cols-2 gap-8 items-center'>

                    {/* Intro text */}
                    <motion.div
                        className='order-2 md:order-1'
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

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='order-1 md:order-2 flex justify-center md:justify-end'
                    >
                        <img
                            src={profile}
                            alt="Sai Chaitanya"
                            className='w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border border-white/10'
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;