"use client"
import { ArrowUp, Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
import { Josefin_Sans } from "next/font/google"; // Import the font for consistency

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'] // Using weights consistent with other pages
});

function Footer() {
    return (
        <footer className={`w-full bg-white py-16 px-4 relative ${josefin.className}`}>
            {/* Newsletter Section */}
            <div className="flex flex-col items-center justify-center text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Get Our Newsletter</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                    To join the worldwide community and stay updated with TinyWags news.
                </p>
                <div className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-full shadow-lg max-w-lg w-full">
                    <input
                        type="email"
                        placeholder="Type your Email Address"
                        className="flex-1 px-5 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 sm:mb-0 sm:mr-2 w-full sm:w-auto min-w-0" // Added min-w-0 for better flex behavior
                    />
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                        Send Now
                    </button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-gray-700">
                {/* Brand Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">TinyWags</h3>
                    <p className="text-sm mb-4">Copyright © 2020. TinyWags. All rights reserved.</p> {/* Updated Lorem Ipsum */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
                <div className='flex w-full items-center justify-around'>
                    {/* Services Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Home</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Product</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Category</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">About</a></li>
                        </ul>
                    </div>

                    {/* About Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Our Story</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Benefits</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Team</a></li>
                            <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Careers</a></li>
                        </ul>
                    </div>
                </div>


                {/* Scroll to Top Button */}
                {/* Positioned absolutely relative to the footer */}
                <div className="absolute bottom-8 right-4 sm:right-8 md:bottom-16 md:right-16 z-20"> {/* Adjusted positioning for smaller screens */}
                    <button
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={24} />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;