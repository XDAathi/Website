export const Resume = () => {
    return (
        <section
            id="resume"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-950 text-white"
        >
            <a
                href="/resume.pdf"
                download
                className="mb-6 px-6 py-2 bg-indigo-300 text-indigo-900 font-bold rounded-lg shadow-md hover:bg-indigo-400 hover:scale-105 transition-all duration-200 self-center"
            >
                DOWNLOAD
            </a>
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-2 flex flex-col items-center border-4 border-indigo-300">
                <iframe
                    src="/resume.pdf"
                    title="Resume PDF"
                    className="w-full h-[80vh] rounded"
                />
            </div>
            <a
                href="/resume.pdf"
                download
                className="mt-6 px-6 py-2 bg-indigo-300 text-indigo-900 font-bold rounded-lg shadow-md hover:bg-indigo-400 hover:scale-105 transition-all duration-200 self-center"
            >
                DOWNLOAD
            </a>
        </section>
    );
};