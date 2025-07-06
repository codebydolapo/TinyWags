"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Josefin_Sans } from "next/font/google";
import { Heart, PawPrint, ShieldCheck, Home, Utensils, Syringe, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
import { useRouter } from 'next/navigation'; // For back button if needed, or just for general navigation

const josefin = Josefin_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700']
});

const DonationPage = () => {
    const [customAmount, setCustomAmount] = useState('');
    const [selectedTier, setSelectedTier] = useState<number | null>(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const router = useRouter(); // Initialize useRouter

    const donationTiers = [
        { amount: 25, description: "Provides a warm blanket for a pet." },
        { amount: 50, description: "Feeds a pet for a week." },
        { amount: 100, description: "Covers a pet's basic vaccinations." },
        { amount: 250, description: "Supports a pet's shelter for a month." },
    ];

    const handleDonateClick = (amount: number | string) => {
        let finalAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

        if (isNaN(finalAmount) || finalAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        // Simulate donation process
        console.log(`Donating $${finalAmount}`);
        setShowSuccessMessage(true);
        setCustomAmount(''); // Clear custom amount
        setSelectedTier(null); // Clear selected tier

        // Hide success message after a few seconds
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 5000);
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 `}>
            {/* Header/Hero Section */}
            <header className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src="/images/banner2.jpg" // Placeholder image for hero
                    alt="Pets helping pets"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"
                    unoptimized
                />
                <div className="relative z-10 text-center p-4 bg-[#0000005b] bg-opacity-40 rounded-xl max-w-4xl mx-auto shadow-lg">
                    <h1 className="text-3xl md:text-6xl font-bold md:mb-8 mb-4 leading-tight">
                        Give a Paw, Lend a Hand and Donate to <b className='text-green-500'>TinyWags</b>
                    </h1>
                    {/* <p className="text-sm md:text-2xl font-semibold md:my-4 my-2 ">
                        Donate to TinyWags
                    </p> */}
                    <p className="text-xs md:text-sm font-light">
                        Every contribution helps us provide love, care, and forever homes for pets in need.
                    </p>
                </div>
            </header>

            {/* Why Donate Section */}
            <section className="py-16 px-4 sm:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Why Your Support Matters</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                        <PawPrint size={60} className="text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Saving Lives</h3>
                        <p className="text-gray-700">Your donation directly funds rescue missions and safe havens for abandoned animals.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                        <Heart size={60} className="text-pink-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Providing Care</h3>
                        <p className="text-gray-700">We ensure every pet receives medical attention, nutritious food, and a loving environment.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                        <ShieldCheck size={60} className="text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Finding Homes</h3>
                        <p className="text-gray-700">We work tirelessly to match pets with caring families, ensuring happy forever homes.</p>
                    </div>
                </div>
            </section>

            {/* How Your Donation Helps Section */}
            <section className="bg-purple-50 py-16 px-4 sm:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">How Your Donation Helps</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <Home size={48} className="text-purple-600 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Shelter & Comfort</h3>
                        <p className="text-gray-700">Provides a safe, clean, and comfortable place for pets to stay.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <Utensils size={48} className="text-pink-600 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Nutritious Food</h3>
                        <p className="text-gray-700">Ensures every animal receives healthy and regular meals.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <Syringe size={48} className="text-blue-600 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Veterinary Care</h3>
                        <p className="text-gray-700">Covers essential check-ups, vaccinations, and emergency treatments.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm">
                        <PawPrint size={48} className="text-green-600 mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Rehabilitation</h3>
                        <p className="text-gray-700">Supports behavioral training and rehabilitation for traumatized pets.</p>
                    </div>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="py-16 px-4 sm:px-8 bg-white shadow-inner">
                <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Make a Difference Today</h2>

                    {showSuccessMessage && (
                        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded-lg text-center" role="alert">
                            <p className="font-bold">Thank You!</p>
                            <p>Your generous donation has been received. We appreciate your support!</p>
                        </div>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {donationTiers.map((tier) => (
                            <button
                                key={tier.amount}
                                onClick={() => { setSelectedTier(tier.amount); setCustomAmount(''); }}
                                className={`p-4 rounded-xl border-2 font-semibold text-lg transition-all duration-200
                                    ${selectedTier === tier.amount
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-md'
                                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-purple-300'
                                    }`}
                            >
                                ${tier.amount}
                            </button>
                        ))}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="customAmount" className="block text-gray-700 text-sm font-semibold mb-2">Or enter a custom amount:</label>
                        <input
                            type="number"
                            id="customAmount"
                            name="customAmount"
                            value={customAmount}
                            onChange={(e) => {
                                setCustomAmount(e.target.value);
                                setSelectedTier(null); // Deselect tier when custom amount is typed
                            }}
                            placeholder="e.g., 150"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 outline-none"
                            min="1"
                        />
                    </div>

                    <button
                        onClick={() => handleDonateClick(selectedTier || customAmount)}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 tracking-wide"
                    >
                        Donate Now
                    </button>
                </div>
            </section>

        </div>
    );
};

export default DonationPage;
