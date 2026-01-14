import React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* subtle background */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 blur-3xl opacity-50" />
            </div>

            <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <h1 className="text-sm font-semibold tracking-tight text-gray-700" >
                        Hackathon
                    </h1>

                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                to="/"
                                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/components"
                                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                            >
                                Components
                            </Link>
                        </li>
                    </ul>

                </nav>
            </header>

            <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 py-10">
                <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur min-h-screen">
                    {children}
                </div>
            </main>

            <footer className="relative border-t border-gray-200 bg-white/70 backdrop-blur">
                <div className="mx-auto max-w-6xl px-6 py-6">
                    <p className="text-center text-sm text-gray-500 hover:text-blue-600">
                        © {new Date().getFullYear()} ACME. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
