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
                    <h1 className="font-mono text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-100 to-blue-400 bg-clip-text text-transparent">
                        Hey I'm Aathi!
                    </h1>
                    <p className="font-mono text-lg text-gray-200 mb-8 max-w-lg mt-4 text-center">
                        I'm a 2nd year who is pursuing a Statistics Quantitative Finance Specialist with an Econ minor
                        <br /><span className="text-blue-400"> @University of Toronto</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <a>

                </a>
            </div>
        </div>


    </section>;
}