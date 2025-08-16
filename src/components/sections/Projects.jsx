export const Projects = () => {
    const projects = [
        {
            title: "Bin Buddy",
            subtitle: "Hackathon Project",
            image: "public/binbud.png",
            description: "Full stack waste classification program build during Solution Hacks. WON 1st PLACE!! Fully functional with a database to store user data and location data related to disposable locations. Also includes Google Auth.",
            tags: ["Python", "React", "Postgre SQL", "Vite"],
            link: "https://github.com/XDAathi/Bin-Buddy",
            badge: "HACKATHON WINNER"
        },
        {
            title: "Accident & Car Manufacturing Analysis",
            subtitle: "Data Science Case Comp",
            image: "public/DS3_D.png",
            description: "A data science project built for the DS3 Datathon. Utilized advanced analytics and machine learning to solve real-world problems using large datasets.",
            tags: ["ML ", "Python", "Pandas", "Scikit-learn", "Numpy", "Pandas", "Seaborn"],
            link: "https://github.com/XDAathi/DS3-Datathon",
        },
        {
            title: "Personal Website",
            subtitle: "Personal Project",
            image: "public/website.png",
            description: "This is the website you are on right NOW!! I used this project to self teach React. Encorporated TailWindCSS for better coding experience.",
            tags: ["React", "JavaScript", "TailWindCSS"],
            link: "https://github.com/XDAathi/Ability",
        },
        {
            title: "Ability",
            subtitle: "Hackathon Project",
            image: "public/ability2.jpg",
            description: "An accessibility-focused iOS app that turns natural-language prompts and optional images into 3D-printable assistive devices via a Python-Blender pipeline. Built during Gen AI Hackathon 2025.",
            tags: ["Swift UI","Swift", "Python", "Blender", "Gemini", "Groq"],
            link: "https://github.com/XDAathi/Ability",
        },
    
        {
            title: "Fullstack Graph Visualizer & Intersection Finder",
            subtitle: "Personal Project",
            image: "public/plot.png",
            description: "A application to visualize graphs and find intersections. Using inspiration from desmos,fullstack approach for interactive graph analysis.",
            tags: ["Python", "Tkinter", "Turtle"],
            link: "https://github.com/XDAathi/Fullstack-Graph-Visualizer-and-Intersection-Finder",
        }
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-[#181824] via-[#23232a] to-[#181824]"
        >
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-40 h-40 bg-indigo-400 opacity-10 rounded-full blur-2xl absolute top-10 left-10"></div>
                <div className="w-32 h-32 bg-blue-300 opacity-10 rounded-full blur-2xl absolute bottom-10 right-10"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center w-full">
                <h2 className="text-4xl font-bold text-indigo-200 mb-12 mt-8 font-mono">Projects</h2>
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#181824] rounded-2xl border-2 border-indigo-900/60 shadow-2xl flex flex-col overflow-hidden cursor-pointer font-mono
                                       transition-all duration-300
                                       hover:scale-105
                                       hover:shadow-[0_0_32px_4px_rgba(129,140,248,0.25),0_0_80px_8px_rgba(99,102,241,0.12)]
                                       hover:border-indigo-400 relative"
                        >
                            {project.badge && (
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="bg-yellow-500 text-black text-xs font-black px-3 py-1 rounded-lg shadow-lg">
                                        {project.badge}
                                    </div>
                                </div>
                            )}
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
                                <p className="text-gray-300 mb-2 flex-1 font-mono">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};