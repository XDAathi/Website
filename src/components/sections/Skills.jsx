import { FaPython, FaJava, FaSwift, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiC, SiJavascript, SiHtml5, SiSwift, SiPycharm, SiJupyter } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiVisualstudio, DiNetbeans } from "react-icons/di";

export const Skills = () => (
  <section
    id="skills"
    className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-[#181824] via-[#23232a] to-[#181824]"
  >
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="w-40 h-40 bg-indigo-400 opacity-10 rounded-full blur-2xl absolute top-10 left-10"></div>
      <div className="w-32 h-32 bg-blue-300 opacity-10 rounded-full blur-2xl absolute bottom-10 right-10"></div>
    </div>
    <h2 className="z-10 text-4xl font-bold text-indigo-200 mb-8 font-mono">Skills</h2>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 px-2 z-10">
      {/* Languages Frame */}
      <div className="bg-[#181824] rounded-2xl border-2 border-indigo-900/60 shadow-2xl p-6 font-mono
                      transition-all duration-300
                      hover:shadow-[0_0_32px_4px_rgba(129,140,248,0.25),0_0_80px_8px_rgba(99,102,241,0.12)]
                      hover:border-indigo-400"
      >
        <h3 className="text-xl font-bold text-indigo-300 mb-6 text-center">Languages</h3>
        <div className="space-y-3">
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            Python <FaPython className="text-[#3776ab] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            C <SiC className="text-[#00599c] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            Java <FaJava className="text-[#f89820] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            JavaScript <SiJavascript className="text-[#f7df1e] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            HTML/CSS <SiHtml5 className="text-[#e34c26] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            Swift <SiSwift className="text-[#f05138] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            C# <SiC className="text-[#00599c] text-2xl ml-3" />
          </div>
        </div>
      </div>
      {/* Frameworks Frame */}
      <div className="bg-[#181824] rounded-2xl border-2 border-indigo-900/60 shadow-2xl p-6 font-mono
                      transition-all duration-300
                      hover:shadow-[0_0_32px_4px_rgba(129,140,248,0.25),0_0_80px_8px_rgba(99,102,241,0.12)]
                      hover:border-indigo-400"
      >
        <h3 className="text-xl font-bold text-indigo-300 mb-6 text-center">Frameworks</h3>
        <div className="space-y-3">
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            React JS <RiReactjsFill className="text-[#00599c] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            React Native <RiReactjsFill className="text-[#00599c] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            SwiftUI <FaSwift className="text-[#00F0FF] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            Node.js <FaNodeJs className="text-[#00FF00] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            TailwindCSS <RiTailwindCssFill className="text-[#A5F3FC] text-2xl ml-3" />
          </div>
        </div>
      </div>
      {/* Developer Tools Frame */}
      <div className="bg-[#181824] rounded-2xl border-2 border-indigo-900/60 shadow-2xl p-6 font-mono
                      transition-all duration-300
                      hover:shadow-[0_0_32px_4px_rgba(129,140,248,0.25),0_0_80px_8px_rgba(99,102,241,0.12)]
                      hover:border-indigo-400"
      >
        <h3 className="text-xl font-bold text-indigo-300 mb-6 text-center">Developer Tools</h3>
        <div className="space-y-3">
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            Git <FaGit className="text-[#F1502F] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            GitHub <FaGithub className="text-white text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            VS Code <DiVisualstudio className="text-[#0078d7] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            NetBeans <DiNetbeans className="text-[#EA205E] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            PyCharm <SiPycharm className="text-[#4584b6] text-2xl ml-3" />
          </div>
          <div className="bg-[#23232a] rounded-lg px-4 py-2 text-white flex justify-between items-center">
            Jupyter <SiJupyter className="text-[#F89D45] text-2xl ml-3" />
          </div>
        </div>
      </div>
    </div>
  </section>
);