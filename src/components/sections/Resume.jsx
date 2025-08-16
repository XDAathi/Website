export const Resume = () => {
    return (
        <section
            id="resume"
            className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-[#181824] via-[#23232a] to-[#181824]"
        >
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-40 h-40 bg-indigo-400 opacity-10 rounded-full blur-2xl absolute top-10 left-10"></div>
                <div className="w-32 h-32 bg-blue-300 opacity-10 rounded-full blur-2xl absolute bottom-10 right-10"></div>
            </div>
            <h2 className="z-10 text-4xl font-bold text-indigo-200 mb-8 mt-8 font-mono">
                Resume
            </h2>
            <div className="w-full max-w-3xl bg-[#181824] rounded-2xl border border-indigo-900/60 shadow-2xl p-6 flex flex-col items-center z-10 font-mono">
                <iframe
                    src="RBC__Data_Analyst_Aathithya_Ananth.pdf"
                    title="Resume PDF"
                    className="w-full h-[80vh] rounded-lg bg-white mb-4"
                />
            </div>
            <a
                href="/resume.pdf"
                download
                className="mt-6 px-6 py-2 bg-[#181824] font-bold rounded-lg shadow-md border border-indigo-900/60
                           transition-all duration-300
                           hover:scale-105
                           hover:shadow-[0_0_32px_4px_rgba(129,140,248,0.25),0_0_80px_8px_rgba(99,102,241,0.12)]
                           hover:border-indigo-400 hover:bg-[#353574] z-10 text-indigo-200 tracking-widest"
            >
                DOWNLOAD
            </a>
            <div className="h-20" /> {/* Footer space */}
        </section>
    );
};