"use client"
import { Pet, PetData } from "@/types/petTypes";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import petData from "@/data/petData";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";

// Pet Detail Page Component
const page = () => {

    const [pet, setPet] = useState<Pet | undefined>(undefined);

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    // Helper function to find a pet by ID
    const getPet = (id: string): Pet | undefined => {
        for (const category in petData) {
            // Ensure the category is a valid key of PetData
            if (Object.prototype.hasOwnProperty.call(petData, category)) {
                const petsInCategory = petData[category as keyof PetData];
                const foundPet = petsInCategory.find(pet => pet.id === id);
                if (foundPet) {
                    return foundPet;
                }
            }
        }
        return undefined;
    };

    useEffect(() => {
        if (!id) {
            console.error("Pet ID not found in the URL");
            return;
        }

        setPet(getPet(id))
        if (!pet) {
            console.error(`Pet with ID ${id} not found`);
        }
    }, [id]);

    if (!pet) {
        return (
            <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center">
                <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center">
                    <p className="text-xl text-gray-700">Pet not found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8 relative">
                {/* Back Button */}
                <button
                    // onClick={onBack}
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center text-gray-700"
                    aria-label="Back to pets"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Pet Image */}
                <div className="w-full  relative rounded-lg overflow-hidden mb-6">
                    <Image
                        src={pet.imageUrl}
                        alt={pet.name}
                        className="object-cover w-full h-full"
                        width={0}
                        height={0}
                        priority
                        unoptimized
                    />
                </div>

                {/* Pet Details */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">{pet.name}</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center">
                    {pet.breed} &bull; Age: {pet.age}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">About {pet.name}</h2>
                        <p className="text-gray-700 leading-relaxed">{pet.description}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Details</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Location:</strong> {pet.location}</li>
                            <li><strong>Temperament:</strong> {pet.temperament}</li>
                            <li><strong>Health:</strong> {pet.health}</li>
                            <li><strong>Adoption Fee:</strong> ${pet.adoptionFee}</li>
                            <li><strong>Fun Fact:</strong> {pet.funFact}</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-6">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-lg">
                        Adopt {pet.name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page