"use client";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted", { name, email, message });

        setFormSubmitted(true);

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="bg-gradient-to-b from-purple-100 to-blue-50 min-h-screen">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                {/* Page Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-4 animate-fade-in">
                    Contact Me
                </h1>
                <p className="mt-2 text-gray-600 text-center text-base sm:text-lg animate-fade-in">
                    You can reach me via email at{" "}
                    <a
                        href="mailto:shanezehra117@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        shanezehra117@gmail.com
                    </a>.
                </p>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 p-4 sm:p-6 bg-white shadow-lg rounded-lg space-y-6 animate-slide-in-up"
                >
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-base sm:text-lg font-semibold text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-base sm:text-lg font-semibold text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-base sm:text-lg font-semibold text-gray-700"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Success Message */}
                {formSubmitted && (
                    <p className="mt-6 text-center text-green-500 font-semibold animate-fade-in">
                        Thank you for your message! I will get back to you soon.
                    </p>
                )}
            </div>
            <Footer />
        </div>
    );
}
