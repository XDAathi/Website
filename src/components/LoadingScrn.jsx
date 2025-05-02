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
        <div className="fixed inset-0 z-50 bg-indigo-950 text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1">|</span>
            </div>

            <div className="w-[400px] h-[2px] bg-cyan-950 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-200 shadow-[0_0_15px_#bfdbf7] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    );
}