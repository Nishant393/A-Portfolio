import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Logo Component
    const Logo = () => (
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center bg-black">
                <span className="text-white font-bold">AL</span>
            </div>
        </div>
    );


    const NavLink = ({ href, children }) => (
        <button
            onClick={() => scrollToSection(href.substring(1))}
            className="hover:text-blue-400 transition-colors duration-300"
        >
            {children}
        </button>
    );



    // Contact Form Component
    const ContactForm = () => (
        <div className="w-full max-w-md mx-auto">
            <form className="bg-white shadow-lg rounded-lg p-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                        id="description"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                >
                    Send Message
                </button>
            </form>
        </div>
    );

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Close mobile menu if open
            setIsMenuOpen(false);

            // Calculate header height (16 * 4 = 64px)
            const headerOffset = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-black text-white fixed w-full z-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <Logo />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#about">About Me</NavLink>
                            <NavLink href="#skills">Skills</NavLink>
                            <NavLink href="#projects">Projects</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4">
                            <div className="flex flex-col space-y-4">
                                <NavLink href="#home">Home</NavLink>
                                <NavLink href="#about">About Me</NavLink>
                                <NavLink href="#skills">Skills</NavLink>
                                <NavLink href="#projects">Projects</NavLink>
                                <NavLink href="#contact">Contact</NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="h-screen bg-black text-white flex items-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-4">Ayush Lakhane</h1>
                        <p className="text-xl text-blue-400">Full Stack Developer</p>
                        <p className="mt-6 text-gray-300">Be treated like a king</p>
                    </div>
                    <div className="pt-8 space-y-4">
                        <div className="flex items-center space-x-2 text-gray-300">
                            <Mail size={20} className="text-blue-400" />
                            <span>ayushlakshane35@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <Phone size={20} className="text-blue-400" />
                            <span>+91 8767771614</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <div className="max-w-3xl">
                        <p className="text-gray-600">
                            My work isn’t just about hair or beauty; it’s about giving people confidence and happiness. The
                            way you transform looks and lift spirits is incredible. A salon isn’t just a place for grooming—it's a place
                            where confidence is built and people walk out feeling like the best version of themselves.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Skills</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-xl mb-4">Hair</h3>
                            <p className="text-gray-600">Haircut , Hairspa , Head Massage</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-xl mb-4">Beard</h3>
                            <p className="text-gray-600">Beardseting, Shaving</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-xl mb-4">Face</h3>
                            <p className="text-gray-600"> Preassure Point Face Massage, Facial</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="font-bold text-xl mb-4">All Over Mens Basic Working</h3>
                            <p className="text-gray-600">Haircut , Beardseting , shaving , Preassure Point Face Massage , Hairspa , Head Massage , Facial , All Over Mens Basic Working</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Hobbies</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                            <h3 className="font-bold text-xl mb-4">Play Indoor Game</h3>
                            <p className="text-gray-600">Stay Cool. Game On.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                        <h3 className="font-bold text-xl mb-4">Reading</h3>
                            <p className="text-gray-600">Reading Is Help Your Mind To Bloom</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                            <h3 className="font-bold text-xl mb-4">Photography</h3>
                            <p className="text-gray-600">Capturing the beauty of your journey</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/Nishant393" className="hover:text-blue-400">
                            <Github size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:nishantpawar393@gmail.com" className="hover:text-blue-400">
                            <Mail size={24} />
                        </a>
                    </div>
                    <p className="text-center mt-4 text-gray-400">
                        © {new Date().getFullYear()} Nishant Pawar. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;