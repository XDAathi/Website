export const Projects = () => {
    const projects = [
        {
            title: "Ability",
            subtitle: "iOS APP · BLENDER · 3D PRINTING",
            image: "/ability2.jpg",
            description: "An accessibility-focused iOS app that turns natural-language prompts and optional images into 3D-printable assistive devices via a Python-Blender pipeline. Built during Gen AI Hackathon 2025.",
            tags: ["Swift UI","Swift", "Python", "Blender", "Gemini", "Groq"],
            link: "https://github.com/XDAathi/Ability",
        },
        {
            title: "DS3 Datathon",
            subtitle: "DATA SCIENCE COMPETITION",
            image: "/ds3.png",
            description: "A data science project built for the DS3 Datathon. Utilized advanced analytics and machine learning to solve real-world problems using large datasets.",
            tags: ["ML", "Python", "Pandas", "Scikit-learn"],
            link: "https://github.com/XDAathi/DS3-Datathon",
        },
        {
            title: "Fullstack Graph Visualizer & Intersection Finder",
            subtitle: "FULLSTACK APP",
            image: "/plot.png",
            description: "A application to visualize graphs and find intersections. Using inspiration from desmos,fullstack approach for interactive graph analysis.",
            tags: ["Python", "Tkinter", "Turtle"],
            link: "https://github.com/XDAathi/Fullstack-Graph-Visualizer-and-Intersection-Finder",
        }
    ];

    return (
        <section id="projects" className="py-16 bg-transparent">
            <h2 className="text-4xl font-bold text-center mb-12 text-indigo-200 font-mono">Projects</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#23232a] rounded-2xl shadow-2xl border-2 border-indigo-300 flex flex-col overflow-hidden cursor-pointer font-mono
                                   transition-all duration-300
                                   hover:scale-105
                                   hover:shadow-[0_0_24px_4px_rgba(129,140,248,0.5),0_0_40px_8px_rgba(99,102,241,0.25)]
                                   hover:bg-[#353574]"
                    >
                        <div className="w-full h-48 bg-gradient-to-r from-indigo-900/40 to-blue-900/30 flex items-center justify-center overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover h-full w-full rounded-t-2xl"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <span className="text-xs font-mono text-indigo-300 mb-2 tracking-widest">{project.subtitle}</span>
                            <h3 className="text-2xl font-bold text-white mb-2 font-mono">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-indigo-800/60 text-indigo-200 text-xs font-semibold px-2 py-1 rounded font-mono"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-4 flex-1 font-mono">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};