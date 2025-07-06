"use client"
import { Pet } from "@/types/petData";
import { ChevronLeft, Heart, IdCardIcon } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import queries from "@/graphql/queries";
const { GET_PET_BY_ID_QUERY } = queries;
import { SignInButton, useUser } from "@clerk/nextjs";
import AdoptionFormModal from "@/components/AdoptionFormModal";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";


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

    const { user, isLoaded, isSignedIn } = useUser();

    useEffect(() => {
        const fetchPetDetail = async () => {
            if (!selectedPetId) {
                setSelectedPet(null);
                setPetLoading(false);
                return;
            }

            setPetLoading(true);
            try {
                const response = await fetch("/api/graph", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        query: GET_PET_BY_ID_QUERY,
                        variables: { id: selectedPetId }
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                if (result.errors) {
                    throw new Error(result.errors.map((err: any) => err.message).join(", "));
                }

                setSelectedPet(result.data.pet);
            } catch (error: any) {
                setPetError(error);
            } finally {
                setPetLoading(false);
            }
        };

        fetchPetDetail();
    }, [selectedPetId]);

    const handleBackClick = () => router.back();
    const handleAdoptClick = () => isSignedIn && setIsModalOpen(true);

    if (petLoading || !isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
                    <p className={`mt-4 text-xl text-gray-700 ${josefin.className}`}>Loading pet details...</p>
                </div>
            </div>
        );
    }

    if (petError) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-orange-100 p-4">
                <p className={`text-xl text-red-700 font-semibold mb-4 text-center ${josefin.className}`}>Error loading pet: {petError.message}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:shadow-lg"
                >Retry</button>
            </div>
        );
    }

    if (!selectedPet) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
                <p className={`text-xl text-gray-700 ${josefin.className}`}>Pet not found.</p>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4 sm:p-8 ${josefin.className}`}>
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10 relative">
                <div className="flex items-center gap-3 mb-6">
                    <button onClick={handleBackClick} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                        <ChevronLeft size={28} />
                    </button>
                    <Link href="/pets" className="text-sm text-gray-500 hover:underline">Back to all pets</Link>
                </div>

                <div className="w-full aspect-[4/3] sm:aspect-[5/3] relative rounded-xl overflow-hidden shadow-lg mb-8">
                    <Image
                        src={selectedPet.imageUrl}
                        alt={selectedPet.name}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight flex items-center justify-center gap-3">
                        {selectedPet.name}
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-pink-500">
                            <Heart size={22} fill="currentColor" />
                        </button>
                    </h1>
                    <p className="mt-2 text-lg sm:text-xl text-gray-600">{selectedPet.breed} · Age: {selectedPet.age}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <section className="bg-white border border-purple-200 p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold text-purple-700 mb-4">About {selectedPet.name}</h2>
                        <p className="text-gray-700 leading-relaxed">{selectedPet.description}</p>
                    </section>

                    <section className="bg-white border border-pink-200 p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold text-pink-700 mb-4">Key Details</h2>
                        <ul className="text-gray-700 space-y-2">
                            <li><strong>Location:</strong> {selectedPet.location}</li>
                            <li><strong>Temperament:</strong> {selectedPet.temperament}</li>
                            <li><strong>Health:</strong> {selectedPet.health}</li>
                            <li><strong>Adoption Fee:</strong> ${selectedPet.adoptionFee}</li>
                            <li><strong>Fun Fact:</strong> {selectedPet.funFact}</li>
                            <li><strong>Agent:</strong> {selectedPet.agent?.name}</li>
                        </ul>
                    </section>
                </div>

                <div className="w-full flex justify-center">
                    {isSignedIn ? (
                        <button
                            onClick={handleAdoptClick}
                            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105"
                        >Adopt {selectedPet.name}</button>
                    ) : (
                        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg flex items-center gap-3">
                            <Image src="/icons/google.png" alt="" width={24} height={24} className="rounded-full" unoptimized />
                            <SignInButton mode="modal">Sign in to Adopt</SignInButton>
                        </button>
                    )}
                </div>

                {/* Meet More Pets */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Meet More Pets</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Replace with real pet cards */}
                        {selectedPet.randomPets?.map(({ imageUrl, name, breed, age, id },) => (
                            <Link key={id} className="bg-white rounded-xl shadow-md overflow-hidden" href={`/pet/${id}`} aria-label={`View profile of ${name}`}>
                                <div className="aspect-[4/3] relative">
                                    <Image src={imageUrl} alt="Sample Pet" fill className="object-cover" unoptimized />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-lg">{name}</h4>
                                    <p className="text-sm text-gray-500">{breed} · {age}</p>
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
        </div>
    );
};

export default PetDetailPage;
