import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export const About = () => {
    return <section 
    id="about" 
    className="min-h-screen flex items-center justify-center relative">

        <div className="text-center z-10 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-6 text-left">
                <img
                    src="\src\assets\my_pic_cropped.jpeg"
                    alt="Aathi"
                    className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover md:mr-10 mb-6 md:mb-0 shadow-lg border-4 border-blue-200"
                />
                <div>
                    <h1 className="font-mono text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-100 to-blue-400 bg-clip-text text-transparent text-center">
                        Hey I'm Aathi!
                    </h1>
                    <p className="font-mono text-lg text-gray-200 mb-8 max-w-lg mt-4 text-center">
                        I'm a 2nd year pursuing a Statistics Quantitative Finance Specialist with an Econ minor
                        <br /><span className="text-blue-400">@University of Toronto</span>
                    </p>
                    <div className="flex justify-center items-center space-x-6 mt-4">
                        <a
                            href="https://github.com/XDAathi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white text-3xl transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aathithya-ananth/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 text-3xl transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:aathithyaananth@gmail.com"
                            className="text-red-300 hover:text-red-500 text-3xl transition-colors"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </div>


    </section>;
}