import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";  

export default function About() {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold">About Me</h1>
                <div className="flex justify-center my-6">
                    
                    <Image 
                        src="/web developer.jpg" 
                        alt="Profile Picture"
                        width={200} 
                        height={200} 
                        className="rounded-full" 
                    />
                </div>
                <p className="mt-4 text-gray-700">
                    I am a passionate web developer with skills in HTML, CSS, JavaScript, and React.
                    I enjoy creating beautiful and functional web applications and constantly strive to learn new technologies.
                </p>

                <div className="flex justify-center my-6">
                    
                    <Image 
                        src="/web developer 4.jpg" 
                        alt="Profile Picture"
                        width={200}  
                        height={200} 
                        className="rounded-full"
                    />
                </div>
                <p className="mt-4 text-gray-700">

                Create or implement designs demanded by a client or created by a design team. Need expert-level knowledge of a variety of programming languages, including HTML (HyperText Markup Language), CSS, PHP, and JavaScript but also extending to other languages (Ruby, C/C++, Python),
                 frameworks, and libraries
                </p>
            </div>
            <Footer />
        </div>
    );
}
