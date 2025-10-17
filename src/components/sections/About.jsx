import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#181824] via-[#23232a] to-[#181824]"
        >
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-40 h-40 bg-indigo-400 opacity-10 rounded-full blur-2xl absolute top-10 left-10"></div>
                <div className="w-32 h-32 bg-blue-300 opacity-10 rounded-full blur-2xl absolute bottom-10 right-10"></div>
            </div>
            <div className="flex flex-col items-center z-10 px-4 w-full max-w-2xl text-center mt-16">
                <img
                    src="website pic.jpg"
                    alt="Aathi"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover mb-6 shadow-lg border-4 border-indigo-300"
                />
                <h1 className="font-mono text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-200 to-indigo-400 bg-clip-text text-transparent mb-4">
                    Hey I'm Aathi!
                </h1>
                <p className="font-mono text-lg text-indigo-100 mb-8 max-w-xl mx-auto">
                    I'm a 2nd year pursuing a Statistics & Economics Major
                    <br /><span className="text-indigo-300">@University of Toronto</span>
                    <br />During my spare time I enjoy playing badminton, volleyball, swim and working out!
                </p>
                <div className="flex justify-center items-center space-x-6 mt-2">
                    <a
                        href="https://github.com/XDAathi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-200 hover:text-white text-3xl transition-all duration-300
                                   hover:drop-shadow-[0_0_10px_rgba(165,180,252,0.9)]"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aathithya-ananth/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 hover:text-blue-200 text-3xl transition-all duration-300
                                   hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:aathithyaananth@gmail.com"
                        className="text-pink-300 hover:text-pink-400 text-3xl transition-all duration-300
                                   hover:drop-shadow-[0_0_10px_rgba(244,63,94,0.8)]"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
}