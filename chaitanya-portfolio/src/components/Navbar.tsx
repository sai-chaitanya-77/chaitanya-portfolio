const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-white/10">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <span className="text-xl font-bold tracking-wide">
                    Sai<span className="text-indigo-400">.</span>
                </span>
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
            </nav>
        </header>
    );
};

export default Navbar;