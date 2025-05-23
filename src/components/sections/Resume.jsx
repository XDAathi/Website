export const Resume = () => {
    return (
        <section
            id="resume"
            className="min-h-screen flex flex-col items-center justify-center bg-indigo-950 text-white"
        >
            <a
                href="/resume.pdf"
                download
                className="mb-6 px-6 py-2 bg-[#23232a] font-bold rounded-lg shadow-md self-center border border-indigo-300
                           transition-all duration-300
                           hover:scale-105
                           hover:shadow-[0_0_24px_4px_rgba(129,140,248,0.5),0_0_40px_8px_rgba(99,102,241,0.25)]
                           hover:bg-[#353574]"
            >
                <span className="text-indigo-200 tracking-widest">DOWNLOAD</span>
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
                className="mt-6 px-6 py-2 bg-[#23232a] font-bold rounded-lg shadow-md self-center border border-indigo-300
                           transition-all duration-300
                           hover:scale-105
                           hover:shadow-[0_0_24px_4px_rgba(129,140,248,0.5),0_0_40px_8px_rgba(99,102,241,0.25)]
                           hover:bg-[#353574]"
            >
                <span className="text-indigo-200 tracking-widest">DOWNLOAD</span>
            </a>
        </section>
    );
};