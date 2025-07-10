import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState({
        home: true,
        about: false,
        skills: false,
        hobbies: false,
        contact: false
    });

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'hobbies', 'contact'];
            
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isInViewport = rect.top <= 200 && rect.bottom >= 0;
                    
                    setIsVisible(prev => ({
                        ...prev,
                        [section]: isInViewport
                    }));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const Logo = () => (
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center bg-black hover:bg-blue-600 transition-colors duration-500">
                <span className="text-white font-bold">AL</span>
            </div>
        </div>
    );

    const NavLink = ({ href, children }) => (
        <button
            onClick={() => scrollToSection(href.substring(1))}
            className="hover:text-blue-400 transition-colors duration-300 relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </button>
    );

    const ContactForm = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
        
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value
            });
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        };
        
        return (
            <div className="w-full max-w-md mx-auto transform hover:scale-102 transition-transform duration-300">
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
                    <div className="mb-4 relative">
                        <input
                            className="peer shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            id="name"
                            type="text"
                            placeholder=" "
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label 
                            className="absolute text-gray-500 left-3 -top-0.5 px-1 transition-all bg-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-0.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="name"
                        >
                            Name
                        </label>
                    </div>
                    <div className="mb-4 relative">
                        <input
                            className="peer shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            id="email"
                            type="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label 
                            className="absolute text-gray-500 left-3 -top-0.5 px-1 transition-all bg-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-0.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="email"
                        >
                            Email
                        </label>
                    </div>
                    <div className="mb-6 relative">
                        <textarea
                            className="peer shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent h-32"
                            id="message"
                            placeholder=" "
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <label 
                            className="absolute text-gray-500 left-3 -top-0.5 px-1 transition-all bg-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-0.5 peer-focus:text-blue-500 peer-focus:text-sm"
                            htmlFor="message"
                        >
                            Message
                        </label>
                    </div>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                        type="submit"
                    >
                        <Mail size={18} className="mr-2" />
                        Send Message
                    </button>
                </form>
            </div>
        );
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            setIsMenuOpen(false);
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
        <div className="min-h-screen bg-gray-50 font-[Poppins]">
            <div id="google-fonts">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
            </div>

            <nav className="bg-black text-white fixed w-full z-50 shadow-lg">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center h-16">
                        <Logo />

                        <div className="hidden md:flex space-x-8">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#about">About Me</NavLink>
                            <NavLink href="#skills">Skills</NavLink>
                            <NavLink href="#hobbies">Hobbies</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </div>

                        <button
                            className="md:hidden focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden py-4 animate-fadeIn">
                            <div className="flex flex-col space-y-4">
                                <NavLink href="#home">Home</NavLink>
                                <NavLink href="#about">About Me</NavLink>
                                <NavLink href="#skills">Skills</NavLink>
                                <NavLink href="#hobbies">Hobbies</NavLink>
                                <NavLink href="#contact">Contact</NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <section id="home" className={`h-screen bg-black text-white flex items-center ${isVisible.home ? 'animate-fadeIn' : ''}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-4 animate-slideInLeft">Ayush Lakshane</h1>
                        <p className="text-xl text-blue-400 animate-slideInRight">Hair Stylistl</p>
                        <p className="mt-6 text-gray-300 animate-fadeIn">Be treated like a king</p>
                    </div>
                    <div className="pt-8 space-y-4 animate-slideInUp">
                        <div className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                            <Mail size={20} className="text-blue-400" />
                            <span>ayushlakshane35@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                            <Phone size={20} className="text-blue-400" />
                            <span>+91 8767771614</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className={`py-20 bg-white ${isVisible.about ? 'animate-fadeIn' : ''}`}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 relative inline-block">
                        About Me
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                    <div className="max-w-3xl">
                        <p className="text-gray-600 leading-relaxed">
                            My work isn't just about hair or beauty; it's about giving people confidence and happiness. The
                            way you transform looks and lift spirits is incredible. A salon isn't just a place for grooming—it's a place
                            where confidence is built and people walk out feeling like the best version of themselves.
                        </p>
                    </div>
                </div>
            </section>

            <section id="skills" className={`py-20 bg-gray-50 ${isVisible.skills ? 'animate-fadeIn' : ''}`}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 relative inline-block">
                        Skills
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-blue-600 mr-2">content_cut</span>
                                <h3 className="font-bold text-xl">Hair</h3>
                            </div>
                            <p className="text-gray-600">Haircut, Hairspa, Head Massage</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-blue-600 mr-2">face</span>
                                <h3 className="font-bold text-xl">Beard</h3>
                            </div>
                            <p className="text-gray-600">Beardseting, Shaving</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-blue-600 mr-2">spa</span>
                                <h3 className="font-bold text-xl">Face</h3>
                            </div>
                            <p className="text-gray-600">Pressure Point Face Massage, Facial</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-blue-600 mr-2">psychology</span>
                                <h3 className="font-bold text-xl">All Over Mens Basic Working</h3>
                            </div>
                            <p className="text-gray-600">Haircut, Beardseting, Shaving, Pressure Point Face Massage, Hairspa, Head Massage, Facial, All Over Mens Basic Working</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hobbies" className={`py-20 bg-white ${isVisible.hobbies ? 'animate-fadeIn' : ''}`}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 relative inline-block">
                        Hobbies
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-blue-600 mr-2">sports_esports</span>
                                <h3 className="font-bold text-xl">Play Indoor Game</h3>
                            </div>
                            <p className="text-gray-600">Stay Cool. Game On.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-blue-600 mr-2">menu_book</span>
                                <h3 className="font-bold text-xl">Reading</h3>
                            </div>
                            <p className="text-gray-600">Reading Is Help Your Mind To Bloom</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-blue-600 mr-2">photo_camera</span>
                                <h3 className="font-bold text-xl">Photography</h3>
                            </div>
                            <p className="text-gray-600">Capturing the beauty of your journey</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className={`py-20 bg-gray-50 ${isVisible.contact ? 'animate-fadeIn' : ''}`}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center relative inline-block mx-auto">
                        Contact Me
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </h2>
                    <ContactForm />
                </div>
            </section>

            <footer className="bg-black text-white">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/Nishant393" className="hover:text-blue-400 transform hover:scale-110 transition-transform duration-300">
                            <Github size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transform hover:scale-110 transition-transform duration-300">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:nishantpawar393@gmail.com" className="hover:text-blue-400 transform hover:scale-110 transition-transform duration-300">
                            <Mail size={24} />
                        </a>
                    </div>
                    <p className="text-center mt-4 text-gray-400">
                        © {new Date().getFullYear()} Nishant Pawar. All rights reserved.
                    </p>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideInLeft {
                    from { transform: translateX(-50px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes slideInRight {
                    from { transform: translateX(50px); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                
                @keyframes slideInUp {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out;
                }
                
                .animate-slideInLeft {
                    animation: slideInLeft 1s ease-out;
                }
                
                .animate-slideInRight {
                    animation: slideInRight 1s ease-out;
                }
                
                .animate-slideInUp {
                    animation: slideInUp 1s ease-out;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;
