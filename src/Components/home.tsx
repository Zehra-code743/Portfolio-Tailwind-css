"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function Home() {
    const [isCvVisible, setIsCvVisible] = useState(false);

    const toggleCv = () => {
        setIsCvVisible(!isCvVisible);
    };

    const handleDownloadCv = () => {
        const cvContent = `
            Name: Shan-e-Zehra\n
            Phone: 03333232390\n
            Email: shanezehra117@gmail.com\n
            Education: M.A from University of Karachi (2021)\n
            Skills: HTML, CSS, JavaScript, Communication Skills\n
            Work Experience: Intern at PTV News as Reporter\n
        `;

        const blob = new Blob([cvContent], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "CV_Shan-e-Zehra.txt";
        link.click();
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
                {/* Welcome Section */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-blue-600 animate-fade-in">
                    Welcome to My Portfolio
                </h1>
                <div className="flex justify-center mb-6">
                    <Image
                        src="/profile picture.jpg"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <p className="text-center text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
                    Welcome to my online portfolio! I’m Shan-e-Zehra, a passionate and dedicated web
                    developer with a strong foundation in HTML, CSS, JavaScript, and React. With a
                    background in media and technology, I thrive on creating beautiful, functional,
                    and responsive websites that provide seamless user experiences.
                </p>

                <p className="text-center text-gray-700 mb-6 text-base sm:text-lg">
                    Click the button below to view my CV.
                </p>

                {/* Toggle CV Button */}
                <div className="flex justify-center">
                    <button
                        onClick={toggleCv}
                        className="px-6 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
                    >
                        {isCvVisible ? "Hide CV" : "Show CV"}
                    </button>
                </div>

                {/* CV Section */}
                {isCvVisible && (
                    <div className="mt-8 mx-auto max-w-3xl p-4 bg-gray-100 rounded-lg shadow-md transition-all duration-500 animate-fade-in">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                            Curriculum Vitae
                        </h2>
                        <p className="text-gray-600">
                            <strong>Name:</strong> Shan-e-Zehra
                        </p>
                        <p className="text-gray-600">
                            <strong>Phone:</strong> 03333232390
                        </p>
                        <p className="text-gray-600">
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:shanezehra117@gmail.com"
                                className="text-blue-500 hover:underline"
                            >
                                shanezehra117@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-600">
                            <strong>Education:</strong> M.A from University of Karachi (2021)
                        </p>
                        <p className="text-gray-600">
                            <strong>Skills:</strong> HTML, CSS, JavaScript, Communication Skills
                        </p>
                        <p className="text-gray-600">
                            <strong>Work Experience:</strong> Intern at PTV News as Reporter
                        </p>
                    </div>
                )}

                {/* Download CV Button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleDownloadCv}
                        className="px-6 py-2 bg-green-500 text-white text-sm sm:text-base rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-300"
                    >
                        Generate CV (Download)
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
