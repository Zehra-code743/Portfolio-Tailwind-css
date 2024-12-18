/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDropdown = (section: any) => {
        setOpenDropdown((prev) => (prev === section ? "" : section));
    };

    return (
        <header className="bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 text-black shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">My Portfolio</h1>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block md:hidden text-xl focus:outline-none"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>

                {/* Navigation for Desktop and Mobile */}
                <nav
                    className={`absolute md:static top-16 left-0 md:top-0 bg-gradient-to-r from-pink-300 via-red-300 to-red-400 md:bg-transparent w-full md:w-auto transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    } md:flex items-center`}
                >
                    <div className="md:flex md:space-x-6 md:items-center">
                        {/* Home Link */}
                        
                        {/* Home Link */}
                        <Link href="/" className="block px-4 py-2 md:py-0 hover:underline hover:text-yellow-400">
                            Home
                        </Link>

                        {/* About Dropdown */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => toggleDropdown("about")}
                                className="block px-4 py-2 md:py-0 hover:underline"
                            >
                                About
                            </button>
                            {openDropdown === "about" && (
                                <div className="absolute left-0 mt-2 w-40 bg-yellow-200 text-black rounded-lg shadow-lg z-10">
                                    <Link
                                        href="/about"
                                        className="block px-4 py-2 hover:bg-purple-600"
                                    >
                                        About Me
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Projects Dropdown */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => toggleDropdown("projects")}
                                className="block px-4 py-2 md:py-0 hover:underline"
                            >
                                Projects
                            </button>
                            {openDropdown === "projects" && (
                                <div className="absolute left-0 mt-2 w-40 bg-yellow-200 text-black rounded-lg shadow-lg z-10">
                                    <Link
                                        href="/projects"
                                        className="block px-4 py-2 hover:bg-purple-600"
                                    >
                                        My Projects
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Contact Dropdown */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => toggleDropdown("contact")}
                                className="block px-4 py-2 md:py-0 hover:underline"
                            >
                                Contact
                            </button>
                            {openDropdown === "contact" && (
                                <div className="absolute left-0 mt-2 w-40 bg-yellow-200 text-black rounded-lg shadow-lg z-10">
                                    <Link
                                        href="/contact"
                                        className="block px-4 py-2 hover:bg-purple-600"
                                    >
                                        Get in Touch
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
