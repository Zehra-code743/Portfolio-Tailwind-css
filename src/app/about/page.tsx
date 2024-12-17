import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-purple-100 min-h-screen">
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
                    About Me
                </h1>

                {/* First Image Section */}
                <div className="flex justify-center my-6">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/web developer.jpg"
                            alt="Profile Picture"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* First Paragraph */}
                <p className="mt-4 text-gray-800 text-base sm:text-lg leading-relaxed text-center">
                    I am a passionate web developer with skills in HTML, CSS, JavaScript, and React.
                    I enjoy creating beautiful and functional web applications and constantly strive
                    to learn new technologies.
                </p>

                {/* Divider */}
                <div className="my-10 border-t-2 border-purple-300 mx-auto w-3/4"></div>

                {/* Second Image Section */}
                <div className="flex justify-center my-6">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/web developer 4.jpg"
                            alt="Profile Picture"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* Second Paragraph */}
                <p className="mt-4 text-gray-800 text-base sm:text-lg leading-relaxed text-center">
                    Create or implement designs demanded by a client or created by a design team. Need
                    expert-level knowledge of a variety of programming languages, including HTML
                    (HyperText Markup Language), CSS, PHP, and JavaScript, but also extending to other
                    languages (Ruby, C/C++, Python), frameworks, and libraries.
                </p>

                {/* Divider */}
                <div className="my-10 border-t-2 border-purple-300 mx-auto w-3/4"></div>

                {/* Third Image Section */}
                <div className="flex justify-center my-6">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/Html.png"
                            alt="Web Development"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* Third Paragraph */}
                <p className="mt-4 text-gray-800 text-base sm:text-lg leading-relaxed text-center">
                    In addition to my technical skills, I am highly motivated to work in a team, 
                    contribute to collaborative projects, and apply best practices in all aspects of development. 
                    I always aim to build accessible, user-centric websites and applications.
                </p>

                {/* Divider */}
                <div className="my-10 border-t-2 border-purple-300 mx-auto w-3/4"></div>

                {/* Fourth Image Section */}
                <div className="flex justify-center my-6">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/React.png"
                            alt="Tech Enthusiast"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>

                {/* Fourth Paragraph */}
                <p className="mt-4 text-gray-800 text-base sm:text-lg leading-relaxed text-center">
                    As a tech enthusiast, I keep myself updated with the latest trends in web development 
                    and programming. I enjoy experimenting with new tools and technologies to improve my workflow 
                    and build more efficient, scalable web solutions.
                </p>
            </div>
            <Footer />
        </div>
    );
}
