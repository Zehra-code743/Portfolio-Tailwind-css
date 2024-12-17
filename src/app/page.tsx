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
        <div className="bg-gradient-to-b from-blue-50 to-purple-100 min-h-screen">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-4xl">
                {/* Page Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 transition-transform transform hover:scale-105 duration-500">
                    Welcome to My Portfolio
                </h1>

                {/* Profile Picture */}
                <div className="flex justify-center">
                    <Image
                        src="/profilepicture.png"
                        alt="Profile Picture"
                        width={200}
                        height={200}
                        className="rounded-full transition-transform duration-500 hover:shadow-xl hover:scale-105"
                    />
                </div>

                {/* Welcome Message */}
                <p className="mt-6 text-center text-gray-700 text-base sm:text-lg leading-relaxed">
                    Welcome to my online portfolio! I’m Shan-e-Zehra, a passionate and dedicated web
                    developer with a strong foundation in HTML, CSS, JavaScript, and React. With a
                    background in media and technology, I thrive on creating beautiful, functional,
                    and responsive websites that provide seamless user experiences.
                </p>

                {/* CV Toggle Button */}
                <div className="mt-8">
                    <button
                        onClick={toggleCv}
                        className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 mx-auto block"
                    >
                        {isCvVisible ? "Hide CV" : "Show CV"}
                    </button>
                </div>

                {/* CV Content */}
                {isCvVisible && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md animate-fade-in">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Curriculum Vitae</h2>
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
                <div className="mt-6">
                    <button
                        onClick={handleDownloadCv}
                        className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-300 mx-auto block"
                    >
                        Generate CV (Download)
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
