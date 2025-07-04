"use client"
import { Pet } from "@/types/petData"; // Only need Pet, not PetData here
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// Corrected Import:
import queries from "@/graphql/queries";
const { GET_PET_BY_ID_QUERY } = queries; // Destructure the specific query


const PetDetailPage = () => { // Renamed to PetDetailPage for clarity, though 'page' works

    const pathname = usePathname();
    const selectedPetId = pathname.split('/').pop();

    // State for single pet detail
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
    const [petLoading, setPetLoading] = useState(true); // Start loading as true
    const [petError, setPetError] = useState<Error | null>(null);

    // Fetch single pet by ID
    useEffect(() => {
        const fetchPetDetail = async () => {
            if (!selectedPetId) {
                setSelectedPet(null);
                setPetLoading(false);
                setPetError(null);
                return;
            }

            setPetLoading(true);
            setPetError(null);
            try {
                const response = await fetch('/api/graph', { // Make sure the endpoint matches your route.ts: /api/graph, not /api/graphql
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: GET_PET_BY_ID_QUERY,
                        variables: { id: selectedPetId },
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                if (result.errors) {
                    throw new Error(result.errors.map((err: any) => err.message).join(', '));
                }
                setSelectedPet(result.data.pet); // Assuming your resolver returns { data: { pet: ... } }
            } catch (error: any) {
                setPetError(error);
                console.error("Error fetching pet detail:", error);
            } finally {
                setPetLoading(false);
            }
        };

        fetchPetDetail();
    }, [selectedPetId]); // Re-fetch when selectedPetId changes

    // Conditional Rendering:
    if (petLoading) {
        return (
            <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center justify-center">
                <p className="text-xl text-gray-700">Loading pet details...</p>
            </div>
        );
    }

    if (petError) {
        return (
            <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center justify-center">
                <p className="text-xl text-red-500">Error loading pet: {petError.message}</p>
                <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Retry</button>
            </div>
        );
    }

    // This handles both !selectedPetId and if selectedPet is null after fetch
    if (!selectedPet) {
        return (
            <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center justify-center">
                <p className="text-xl text-gray-700">Pet not found.</p>
            </div>
        );
    }

    // If we reach here, selectedPet is guaranteed to be a Pet object
    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8 relative">
                {/* Back Button */}
                <button
                    // onClick={onBack} // Implement this using Next.js useRouter or window.history.back()
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 p-2 rounded-full z-10 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center text-gray-700"
                    aria-label="Back to pets"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Pet Image */}
                <div className="w-full relative rounded-lg overflow-hidden mb-6">
                    <Image
                        src={selectedPet.imageUrl} // No '!' needed here
                        alt={selectedPet.name}     // No '!' needed here
                        className="object-cover w-full h-full"
                        width={0}
                        height={0}
                        priority
                        unoptimized
                    />
                </div>

                {/* Pet Details */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">{selectedPet.name}</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
                    {selectedPet.breed} &bull; Age: {selectedPet.age}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">About {selectedPet.name}</h2>
                        <p className="text-gray-700 leading-relaxed">{selectedPet.description}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Details</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Location:</strong> {selectedPet.location}</li>
                            <li><strong>Temperament:</strong> {selectedPet.temperament}</li>
                            <li><strong>Health:</strong> {selectedPet.health}</li>
                            <li><strong>Adoption Fee:</strong> ${selectedPet.adoptionFee}</li>
                            <li><strong>Fun Fact:</strong> {selectedPet.funFact}</li>
                            {/* Assuming agentName and agentId are always available for a Pet */}
                            <li><strong>Agent:</strong> {selectedPet.agentName}</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-6">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-lg">
                        Adopt {selectedPet.name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PetDetailPage;