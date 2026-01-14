import React from "react";
import "./index.css";


const App: React.FC = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-white">
            {/* Subtle ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 blur-3xl opacity-60" />
            </div>

            {/* Hero text */}
            <h1 className="relative text-balance text-center text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl">
                Hackathon with the legends{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    SonaSent
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    York101
                </span>
            </h1>
        </div>
    );
};

export default App;
