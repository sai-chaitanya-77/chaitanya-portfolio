import { useState } from "react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-white/10">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <span className="text-xl font-bold tracking-wide">
                    Sai<span className="text-indigo-400">.</span>
                </span>

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
            {navbarOpen && (
                <div className="md:hidden bg-gray-950 border-t border-white/10">
                    <div className="flex flex-col px-4 py-4 gap-4 text-gray-300">
                        {
                            ["about", "skills", "projects", "contact"].map((item) => {
                                return (
                                    <a
                                        key={item}
                                        href={`#${item}`}
                                        className="hover:text-white"
                                        onClick={() => {
                                            setNavbarOpen(false)
                                        }}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;