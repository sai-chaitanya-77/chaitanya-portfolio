const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-4 text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Get In Touch
                </h2>
                <p className="max-w-xl mx-auto text-gray-400 mb-10">
                    I’m currently open to frontend and full-stack opportunities.
                    If you’d like to collaborate or just say hi, feel free to reach out.
                </p>
                <a
                    href="mailto:saichaitanyadhulipalla77@gmail.com"
                    className="inline-block px-8 py-4 border border-indigo-400 text-indigo-400 rounded hover:bg-indigo-400 hover:text-black transition"
                >
                    Say Hello
                </a>
                <div className="mt-12 flex justify-center gap-6 text-sm text-gray-400">
                    <a
                        href="https://github.com/sai-chaitanya-77"
                        className="hover:text-white transition"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sai-chaitanya-dhulipalla-97b794197/"
                        className="hover:text-white transition"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;