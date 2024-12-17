import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="bg-gradient-to-b from-indigo-100 to-blue-50 min-h-screen">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                {/* Page Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-6 animate-fade-in">
                    My Projects
                </h1>
                <p className="text-center text-base sm:text-lg text-gray-600 mb-8 animate-fade-in">
                    Here are some of the projects I have worked on:
                </p>

                {/* Project 1 */}
                <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 animate-slide-in-up">
                        Project 1 - Portfolio Website
                    </h2>
                    <div className="flex flex-col md:flex-row items-center mt-4 transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-in-up">
                        <Image
                            src="/webdeveloper1.png"
                            alt="Project 1 Thumbnail"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
                        />
                        <p className="text-gray-700 text-sm sm:text-base text-center md:text-left">
                            A personal portfolio website built with React and Tailwind CSS, showcasing my web development skills and projects.
                        </p>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 animate-slide-in-up">
                        Project 2 - E-Commerce Website
                    </h2>
                    <div className="flex flex-col md:flex-row items-center mt-4 transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-in-up">
                        <Image
                            src="/webproject.png"
                            alt="Project 2 Thumbnail"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
                        />
                        <p className="text-gray-700 text-sm sm:text-base text-center md:text-left">
                            An e-commerce website with a user-friendly interface, built using Next.js and Stripe for secure payments.
                        </p>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="mt-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 animate-slide-in-up">
                        Project 3 - Blogging Platform
                    </h2>
                    <div className="flex flex-col md:flex-row items-center mt-4 transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-in-up">
                        <Image
                            src="/webdeveloper3.png"
                            alt="Project 3 Thumbnail"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
                        />
                        <p className="text-gray-700 text-sm sm:text-base text-center md:text-left">
                            A blogging platform where users can write and share articles. Built with Node.js and MongoDB for backend and database management.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
