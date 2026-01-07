"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Josefin_Sans } from "next/font/google";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Tooltip } from 'react-tooltip';
import { ChevronLeft, Heart, MapPin, Activity, Sparkles, User } from "lucide-react";

import queries from "@/graphql/queries";
import { Pet } from "@/types/petData";
import AdoptionFormModal from "@/components/AdoptionFormModal";

const { GET_PET_BY_ID_QUERY } = queries;

const josefin = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "600", "700"]
});

const PetDetailPage = () => {
    const pathname = usePathname();
    const router = useRouter();
    const selectedPetId = pathname.split("/").pop();

    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [petLoading, setPetLoading] = useState(true);
    const [petError, setPetError] = useState<Error | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isLoaded, isSignedIn } = useUser();

    useEffect(() => {
        const fetchPetDetail = async () => {
            if (!selectedPetId) return;

            try {
                const response = await fetch("/api/graph", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        query: GET_PET_BY_ID_QUERY,
                        variables: { id: selectedPetId }
                    })
                });

                const result = await response.json();
                if (result.errors) throw new Error(result.errors[0].message);
                setSelectedPet(result.data.pet);
            } catch (error: any) {
                setPetError(error);
            } finally {
                setPetLoading(false);
            }
        };

        fetchPetDetail();
    }, [selectedPetId]);

    if (petLoading || !isLoaded) return <LoadingState />;
    if (petError) return <ErrorState message={petError.message} />;
    if (!selectedPet) return <ErrorState message="We couldn't find this furry friend." />;

    return (
        <main className={`min-h-screen bg-slate-50 py-12 px-4 sm:px-8 ${josefin.className}`}>
            <div className="max-w-6xl mx-auto">
                {/* Navigation Header */}
                <div className="flex items-center justify-between mb-8">
                    <button 
                        onClick={() => router.back()} 
                        className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-white shadow-sm group-hover:bg-purple-50 transition-colors">
                            <ChevronLeft size={20} />
                        </div>
                        <span className="font-medium text-sm">Back to Search</span>
                    </button>
                    
                    <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-pink-500 hover:bg-pink-50 transition-colors border border-pink-50">
                        <Heart size={18} />
                        <span className="text-sm font-semibold tracking-wide uppercase">Save Pet</span>
                    </button>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-purple-100/50 overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-2">
                        {/* Image Gallery Area */}
                        <div className="relative aspect-square lg:aspect-auto">
                            <Image
                                src={selectedPet.imageUrl}
                                alt={selectedPet.name}
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>

                        {/* Content Area */}
                        <div className="p-8 lg:p-12 space-y-8">
                            <div>
                                <h1 className="text-5xl font-bold text-gray-900 mb-2">{selectedPet.name}</h1>
                                <p className="text-xl text-purple-600 font-medium">{selectedPet.breed} · {selectedPet.age}</p>
                            </div>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <StatItem icon={<MapPin size={18}/>} label="Location" value={selectedPet.location} color="blue" />
                                <StatItem icon={<Activity size={18}/>} label="Health" value={selectedPet.health} color="green" />
                                <StatItem icon={<Sparkles size={18}/>} label="Temperament" value={selectedPet.temperament} color="purple" />
                                <StatItem label="Adoption Fee" value={`₦${selectedPet.adoptionFee}`} color="pink" />
                            </div>

                            <hr className="border-gray-100" />

                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900">About this companion</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {selectedPet.description}
                                </p>
                                <div className="bg-purple-50 p-4 rounded-2xl flex items-start gap-3">
                                    <Sparkles className="text-purple-600 shrink-0 mt-1" size={20} />
                                    <p className="text-sm text-purple-800 italic"><strong>Fun Fact:</strong> {selectedPet.funFact}</p>
                                </div>
                            </div>

                            {/* Agent Info & Action */}
                            <div className="pt-6 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-gray-100 rounded-full text-gray-600">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Listing Agent</p>
                                        <span
                                            data-tooltip-id="agent-tooltip"
                                            data-tooltip-html={`
                                                <div class="p-2">
                                                    <p><b>Phone:</b> ${selectedPet.agent?.phone}</p>
                                                    <p><b>Email:</b> ${selectedPet.agent?.email}</p>
                                                </div>
                                            `}
                                            className="font-bold text-gray-800 cursor-help hover:text-purple-600 underline decoration-purple-200 underline-offset-4"
                                        >
                                            {selectedPet.agent?.name}
                                        </span>
                                    </div>
                                </div>

                                {isSignedIn ? (
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-purple-200 hover:-translate-y-1 transition-all"
                                    >
                                        Adopt {selectedPet.name}
                                    </button>
                                ) : (
                                    <div className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:bg-black transition-colors cursor-pointer">
                                        <Image src="/icons/google.png" alt="" width={24} height={24} className="rounded-full invert" />
                                        <SignInButton mode="modal">Sign in to Adopt</SignInButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Pets Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        More friends waiting for you <PawPrintIcon />
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {selectedPet.randomPets?.map((pet) => (
                            <Link key={pet.id} href={`/pet/${pet.id}`} className="group">
                                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image src={pet.imageUrl} alt={pet.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors">{pet.name}</h4>
                                        <p className="text-gray-500 font-medium">{pet.breed} · {pet.age}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <AdoptionFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                petName={selectedPet.name}
            />
            <Tooltip id="agent-tooltip" place="top" style={{ borderRadius: '12px' }} />
        </main>
    );
};

// --- Subcomponents ---

const StatItem = ({ icon, label, value, color }: { icon?: React.ReactNode, label: string, value: string, color: string }) => {
    const colors: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        pink: "bg-pink-50 text-pink-600",
    };
    return (
        <div className={`p-4 rounded-2xl ${colors[color]} border border-white`}>
            <div className="flex items-center gap-2 mb-1 opacity-80 uppercase text-[10px] font-bold tracking-widest leading-none">
                {icon} {label}
            </div>
            <div className="font-bold text-gray-800 truncate">{value}</div>
        </div>
    );
};

const LoadingState = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
            <div className="animate-bounce mb-4 text-purple-600"><Sparkles size={48} /></div>
            <div className="w-16 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 animate-loading-bar"></div>
            </div>
        </div>
    </div>
);

const ErrorState = ({ message }: { message: string }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <div className="p-6 bg-white rounded-full shadow-lg mb-6"><Activity size={48} className="text-red-400" /></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-500 mb-8 max-w-sm">{message}</p>
        <Link href="/pets" className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold">Return to Search</Link>
    </div>
);

const PawPrintIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M11 5L14 9M18 5L15 9M7 11V15M11 13V17M15 13V17M19 11V15M7 19H19" /></svg>
);

export default PetDetailPage;