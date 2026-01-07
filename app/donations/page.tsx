"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, PawPrint, ShieldCheck, Home, Utensils, Syringe, Star, CheckCircle2 } from 'lucide-react';

const DonationPage = () => {
    const [customAmount, setCustomAmount] = useState('');
    const [selectedTier, setSelectedTier] = useState<number | null>(50); // Default to a popular tier
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const donationTiers = [
        { amount: 25, label: "Starter", description: "Provides a warm blanket and a chew toy for a rescue pet." },
        { amount: 50, label: "Care", description: "Feeds a pet for a full week with premium nutritious meals." },
        { amount: 100, label: "Health", description: "Covers a pet's essential vaccinations and heartworm prevention." },
        { amount: 250, label: "Hero", description: "Supports a pet's full shelter costs, including medical, for a month." },
    ];

    const handleDonateClick = (amount: number | string) => {
        const finalAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

        if (!finalAmount || finalAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        setShowSuccessMessage(true);
        setCustomAmount('');
        setSelectedTier(null);

        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setShowSuccessMessage(false), 6000);
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Success Overlay */}
            <header className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/banner2.jpg"
                    alt="Donate to TinyWags"
                    fill
                    className="object-cover brightness-50"
                    priority
                    unoptimized
                />
                
                {showSuccessMessage ? (
                    <div className="relative z-20 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-lg mx-4 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="text-green-600 size-12" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">You're a Hero!</h2>
                        <p className="text-gray-600">Your life-saving gift is already being put to work for our furry friends. A receipt has been sent to your email.</p>
                    </div>
                ) : (
                    <div className="relative z-10 text-center px-6 max-w-4xl">
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Give a Paw, <br/> <span className="text-green-400">Lend a Hand</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto">
                            TinyWags relies 100% on donations. Every dollar provides care, medical treatment, and a second chance at life.
                        </p>
                    </div>
                )}
            </header>

            {/* Donation Interface */}
            <section className="py-16 px-4 -mt-16 relative z-30">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
                    
                    {/* Left side: Why give */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-purple-600 rounded-[2rem] p-8 text-white shadow-xl">
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="text-yellow-300" />
                                <span className="uppercase tracking-widest text-xs font-bold">Monthly Progress</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Help us reach our goal</h3>
                            <div className="w-full bg-purple-800 rounded-full h-4 mb-2">
                                <div className="bg-green-400 h-4 rounded-full w-[72%] transition-all duration-1000"></div>
                            </div>
                            <div className="flex justify-between text-sm font-medium">
                                <span>$14,400 raised</span>
                                <span>Goal: $20,000</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <SmallImpactCard icon={<Utensils className="text-orange-500" />} text="Healthy Meals" />
                            <SmallImpactCard icon={<Syringe className="text-blue-500" />} text="Vaccinations" />
                            <SmallImpactCard icon={<Home className="text-purple-500" />} text="Warm Shelter" />
                            <SmallImpactCard icon={<ShieldCheck className="text-green-500" />} text="Safety" />
                        </div>
                    </div>

                    {/* Right side: Donation Form */}
                    <div className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-2xl shadow-purple-100 p-8 md:p-12 border border-gray-50">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose an amount</h2>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {donationTiers.map((tier) => (
                                <button
                                    key={tier.amount}
                                    onClick={() => { setSelectedTier(tier.amount); setCustomAmount(''); }}
                                    className={`relative group p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-1
                                        ${selectedTier === tier.amount
                                            ? 'border-purple-600 bg-purple-50 shadow-inner'
                                            : 'border-gray-100 bg-gray-50 hover:border-purple-200'
                                        }`}
                                >
                                    <span className={`text-2xl font-bold ${selectedTier === tier.amount ? 'text-purple-600' : 'text-gray-700'}`}>
                                        ${tier.amount}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold">{tier.label}</span>
                                    {selectedTier === tier.amount && (
                                        <div className="absolute -top-2 -right-2 bg-purple-600 text-white p-1 rounded-full">
                                            <CheckCircle2 size={16} />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="mb-8">
                            <label className="block text-gray-500 text-sm font-bold mb-3">Custom amount ($)</label>
                            <input
                                type="number"
                                value={customAmount}
                                onChange={(e) => {
                                    setCustomAmount(e.target.value);
                                    setSelectedTier(null);
                                }}
                                placeholder="Enter other amount"
                                className="w-full text-2xl font-bold p-5 bg-gray-50 border-2 border-transparent focus:border-purple-600 rounded-2xl outline-none transition-all"
                            />
                        </div>

                        {/* Dynamic Description Box */}
                        <div className="bg-green-50 rounded-2xl p-6 mb-8 border border-green-100 animate-in slide-in-from-bottom-2">
                            <p className="text-green-800 flex gap-3 italic">
                                <Star className="shrink-0" />
                                {selectedTier 
                                    ? donationTiers.find(t => t.amount === selectedTier)?.description 
                                    : customAmount 
                                        ? `Your $${customAmount} gift will be used where it's needed most to save animal lives.`
                                        : "Select an amount to see the impact of your gift."}
                            </p>
                        </div>

                        <button
                            onClick={() => handleDonateClick(selectedTier || customAmount)}
                            className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-purple-200 hover:-translate-y-1 transition-all active:scale-95"
                        >
                            Complete Donation
                        </button>
                        
                        <p className="text-center text-gray-400 text-xs mt-6 flex items-center justify-center gap-1">
                            <ShieldCheck size={14} /> Securely processed by TinyWags Payments
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Support Matters */}
            <section className="py-24 px-4 bg-gray-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Your Support Matters</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">Because every tail wag and every purr is made possible by people like you.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <SupportCard 
                            icon={<PawPrint className="text-purple-600" />} 
                            title="Saving Lives" 
                            desc="We rescue animals from high-kill shelters and dangerous situations, providing an immediate safety net." 
                        />
                        <SupportCard 
                            icon={<Heart className="text-pink-600" />} 
                            title="Providing Care" 
                            desc="From surgeries to daily kibble, we ensure every animal is physically and emotionally prepared for a family." 
                        />
                        <SupportCard 
                            icon={<ShieldCheck className="text-blue-600" />} 
                            title="Finding Homes" 
                            desc="We conduct rigorous screening to ensure our pets never have to worry about being homeless again." 
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

// Helper Components
function SmallImpactCard({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
            {icon}
            <span className="text-sm font-bold text-gray-700">{text}</span>
        </div>
    );
}

function SupportCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
    );
}

export default DonationPage;