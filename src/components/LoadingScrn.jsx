import { useEffect, useState } from "react"

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "<Aathithya Ananth/>"


    useEffect(()=>{
        let index = 0;
        const interval = setInterval(()=>{
            setText(fullText.substring(0, index));
            index ++;

            if(index > fullText.length){
                clearInterval(interval);

                setTimeout(() =>{
                    onComplete();
                },1000);

            }
        },100);

        return() => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-[#181824] via-[#23232a] to-[#181824] text-gray-100 flex flex-col items-center justify-center">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-40 h-40 bg-indigo-400 opacity-10 rounded-full blur-2xl absolute top-10 left-10"></div>
                <div className="w-32 h-32 bg-blue-300 opacity-10 rounded-full blur-2xl absolute bottom-10 right-10"></div>
            </div>
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1">|</span>
            </div>

            <div className="w-[400px] h-[2px] bg-cyan-950 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-indigo-200 shadow-[0_0_15px_#bfdbf7] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    );
}