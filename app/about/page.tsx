"use client"
import React from 'react';
import Image from 'next/image';
import { Josefin_Sans } from "next/font/google";
import { Heart, Home, Handshake, Lightbulb} from 'lucide-react';
import { useRouter } from 'next/navigation'; // For scroll to top or other navigation

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
});

const AboutUsPage = () => {
    const router = useRouter(); // Initialize useRouter for potential navigation

    return (
        <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 ${josefin.className}`}>
            {/* Hero Section */}
            <header className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src="/images/banner1.jpg" // Placeholder image for hero
                    alt="Happy pets and people"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0 "
                    unoptimized
                />
                <div className="relative z-10 text-center p-4 bg-[#0000005b] bg-opacity-40 rounded-xl max-w-4xl mx-auto shadow-lg">
                    <h1 className="text-3xl md:text-6xl font-bold md:mb-8 mb-4 leading-tight">
                        Our Passion, Our Purpose: The TinyWags Story
                    </h1>
                    <p className="text-xs md:text-sm font-light">
                        Dedicated to connecting loving families with pets in need, we believe every animal deserves a chance at a happy home.
                    </p>
                </div>
            </header>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-8 bg-white shadow-lg">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            At TinyWags, our mission is simple yet profound: to facilitate the loving adoption of pets by connecting them with compassionate individuals and families. We strive to create a world where every pet has a safe, nurturing, and permanent home, free from neglect and abandonment.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We are committed to promoting responsible pet ownership, advocating for animal welfare, and building a community that cherishes the bond between humans and animals.
                        </p>
                    </div>
                    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/aboutMission.jpg" // Placeholder image
                            alt="Mission"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 hover:scale-105"
                            unoptimized
                        />
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 px-4 sm:px-8 bg-purple-50">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                        <Heart size={50} className="text-pink-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                        <p className="text-gray-700">Every animal is treated with kindness, empathy, and respect.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                        <Handshake size={50} className="text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                        <p className="text-gray-700">We operate with honesty and transparency in all our actions.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                        <Home size={50} className="text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Commitment</h3>
                        <p className="text-gray-700">Dedicated to finding lifelong homes and ensuring pet well-being.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
                        <Lightbulb size={50} className="text-yellow-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <p className="text-gray-700">Empowering adopters with knowledge for responsible pet care.</p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 px-4 sm:px-8 bg-white shadow-lg">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                        <Image
                            src="/images/aboutJourney.jpg" // Placeholder image
                            alt="Our Story"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 hover:scale-105"
                            unoptimized
                        />
                    </div>
                    <div className="text-center md:text-left order-1 md:order-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-pink-800 mb-6">Our Journey So Far</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            TinyWags began with a simple idea: to make a difference in the lives of abandoned and neglected animals. Founded by a small group of passionate animal lovers in 20XX, we started as a local initiative to foster pets and connect them with caring individuals.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Over the years, with the unwavering support of our volunteers, donors, and partners, we&apos;ve grown into a thriving community. We&apos;ve expanded our reach, improved our facilities, and, most importantly, facilitated thousands of successful adoptions, bringing joy to countless families and pets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-4 sm:px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Cause</h2>
                <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
                    Whether you&apos;re looking to adopt, volunteer your time, or make a donation, your involvement makes a tangible difference in the lives of our furry friends.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button
                        onClick={() => router.push('/home')} 
                        className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Adopt a Pet
                    </button>
                    <button
                        onClick={() => router.push('/donate')} 
                        className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Donate Now
                    </button>
                </div>
            </section>

        </div>
    );
};

export default AboutUsPage;
