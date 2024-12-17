const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div className="container mx-auto px-4 text-center">
                <p className="text-base md:text-lg font-semibold animate-fade-in text-gray-300 hover:text-white transition-colors duration-300">
                    &copy; {new Date().getFullYear()} Shan-e-Zehra. All rights reserved.
                </p>
                <div className="flex justify-center mt-4 space-x-6">
                    {/* Social Links */}
                    <a
                        href="https://www.linkedin.com/in/shan-e-zehra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452H16.818V14.8c0-1.344-.027-3.074-1.875-3.074-1.875 0-2.164 1.463-2.164 2.975v5.751h-3.629V9h3.482v1.561h.051c.485-.916 1.673-1.875 3.442-1.875 3.683 0 4.362 2.426 4.362 5.578v6.188zM5.337 7.433c-1.169 0-2.114-.946-2.114-2.114C3.223 4.15 4.168 3.2 5.337 3.2c1.169 0 2.115.946 2.115 2.115s-.946 2.118-2.115 2.118zM7.119 20.452H3.556V9h3.563v11.452zM22.225 0H1.771C.791 0 0 .779 0 1.74v20.507C0 23.22.791 24 1.771 24h20.451C23.207 24 24 23.22 24 22.247V1.74C24 .779 23.207 0 22.225 0z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/shanezehra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.258.793-.577v-2.155c-3.338.727-4.042-1.64-4.042-1.64-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.832 2.809 1.303 3.495.997.108-.775.418-1.303.761-1.603-2.665-.303-5.466-1.333-5.466-5.932 0-1.311.469-2.382 1.236-3.222-.124-.303-.535-1.527.118-3.176 0 0 1.009-.323 3.307 1.233.959-.266 1.986-.398 3.005-.403 1.018.005 2.047.137 3.005.403 2.297-1.556 3.305-1.233 3.305-1.233.654 1.648.242 2.872.119 3.176.77.84 1.234 1.911 1.234 3.222 0 4.609-2.805 5.625-5.475 5.922.429.369.812 1.096.812 2.213v3.292c0 .32.193.69.801.573C20.565 22.093 24 17.596 24 12.297 24 5.67 18.627.297 12 .297z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
