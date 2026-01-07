"use client"
import React from 'react';
import Image from 'next/image';
import { Josefin_Sans } from "next/font/google";
import { Heart, Home, Handshake, Lightbulb, ChevronDown, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
});

const AboutUsPage = () => {
    const router = useRouter();

    return (
        <main className={`min-h-screen bg-white text-gray-800 ${josefin.className}`}>
            {/* Hero Section */}
            <header className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/banner1.jpg"
                    alt="Our Passion"
                    fill
                    className="object-cover brightness-[0.65]"
                    priority
                    unoptimized
                />
                <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
                    <span className="bg-purple-600/20 text-purple-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 inline-block backdrop-blur-md">
                        Established 2002
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                        Our Passion, Our Purpose: <br/> The <span className="text-purple-400">TinyWags</span> Story
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        Dedicated to connecting loving families with pets in need. We believe every animal deserves a chance at a happy home.
                    </p>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                    <ChevronDown size={32} />
                </div>
            </header>

            {/* Mission Section */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-block p-3 bg-purple-50 rounded-2xl text-purple-600">
                            <Heart size={32} />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                At TinyWags, our mission is simple yet profound: to facilitate the loving adoption of pets by connecting them with compassionate individuals and families.
                            </p>
                            <p className="font-medium text-purple-700">
                                We strive to create a world where every pet has a safe, nurturing, and permanent home, free from neglect and abandonment.
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-purple-100 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0"></div>
                        <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/aboutMission.jpg"
                                alt="Mission"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 px-6 md:px-12 bg-gray-50/50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <div className="h-1.5 w-20 bg-purple-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard 
                            icon={<Heart size={36} className="text-pink-500" />}
                            title="Compassion"
                            desc="Every animal is treated with kindness, empathy, and respect."
                            borderColor="border-pink-100"
                        />
                        <ValueCard 
                            icon={<Handshake size={36} className="text-blue-500" />}
                            title="Integrity"
                            desc="We operate with honesty and transparency in all our actions."
                            borderColor="border-blue-100"
                        />
                        <ValueCard 
                            icon={<Home size={36} className="text-green-500" />}
                            title="Commitment"
                            desc="Dedicated to finding lifelong homes and ensuring pet well-being."
                            borderColor="border-green-100"
                        />
                        <ValueCard 
                            icon={<Lightbulb size={36} className="text-yellow-500" />}
                            title="Education"
                            desc="Empowering adopters with knowledge for responsible pet care."
                            borderColor="border-yellow-100"
                        />
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="absolute -inset-4 bg-pink-50 rounded-full blur-3xl opacity-60"></div>
                        <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
                            <Image
                                src="/images/aboutJourney.jpg"
                                alt="Our Story"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <h2 className="text-4xl font-bold text-gray-900">Our Journey So Far</h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                TinyWags began with a simple idea: to make a difference in the lives of abandoned and neglected animals. Founded by a small group of passionate animal lovers in 20XX, we started as a local initiative to foster pets.
                            </p>
                            <p>
                                Over the years, we&apos;ve grown into a thriving community. We&apos;ve facilitated thousands of successful adoptions, bringing joy to countless families and pets across the country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Refined CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-200">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to make a difference?</h2>
                        <p className="text-lg md:text-xl text-purple-50 mb-10 max-w-2xl mx-auto">
                            Whether you're looking to adopt, volunteer, or donate, your involvement saves lives. Join our community today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button
                                onClick={() => router.push('/home')} 
                                className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
                            >
                                Adopt a Pet <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => router.push('/donate')} 
                                className="bg-purple-700/30 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all"
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

// Sub-component for Value Cards
function ValueCard({ icon, title, desc, borderColor }: { icon: React.ReactNode, title: string, desc: string, borderColor: string }) {
    return (
        <div className={`p-8 bg-white rounded-3xl border-2 ${borderColor} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}>
            <div className="mb-6">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
    );
}

export default AboutUsPage;