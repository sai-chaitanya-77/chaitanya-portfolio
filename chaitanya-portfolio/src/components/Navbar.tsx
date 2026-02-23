import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const mobileMenuVariants = {
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.08,
            },
        },
    };

    const mobileItemVariants = {
        closed: { opacity: 0, y: -10 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-white/10">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-xl font-bold tracking-wide hover:text-indigo-400 transition"
                >
                    Chaitanya<span className="text-indigo-400">.</span>
                </a>

                {/* Desktop navbar */}
                <ul className="hidden md:flex gap-8 text-sm text-gray-300">
                    <li>
                        <a href="#about" className="hover:text-white cursor-pointer">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-white cursor-pointer">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-white cursor-pointer">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-white cursor-pointer">Contact</a>
                    </li>
                </ul>

                {/* Mobile hamburger menu */}
                <button
                    className="md:hidden text-gray-300"
                    onClick={() => {
                        setNavbarOpen(!navbarOpen)
                    }}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Nav menu */}
            <AnimatePresence>
                {navbarOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        variants={mobileMenuVariants}
                        className="md:hidden bg-gray-950 border-t border-white/10"
                    >
                        <div className="flex flex-col px-4 py-4 gap-4 text-gray-300">
                            {
                                ["about", "skills", "projects", "contact"].map((item) => {
                                    return (
                                        <motion.a
                                            key={item}
                                            href={`#${item}`}
                                            variants={mobileItemVariants}
                                            className="text-gray-300 hover:text-white transition"
                                            onClick={() => {
                                                setNavbarOpen(false)
                                            }}
                                        >
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </motion.a>
                                    );
                                })
                            }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;