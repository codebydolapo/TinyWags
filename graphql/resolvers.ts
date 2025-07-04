// graphql/resolvers.ts
import petData from '../data/petData';
import { Pet, PetData } from '../types/petData';

const allPets: Pet[] = [
    ...petData.dogs,
    ...petData.cats,
    ...petData.birds,
    ...petData.rabbits,
];

// Renamed 'root' to 'resolvers' for clarity in Apollo context
const resolvers = {
    Query: { // <-- IMPORTANT: Nest your query resolvers here
        pets: (): Pet[] => {
            return allPets;
        },
        pet: (_: any, { id }: { id: string }): Pet | undefined => { // Add '_' for parent argument
            return allPets.find(pet => pet.id === id);
        },
        petsByCategory: (_: any, { category }: { category: keyof PetData }): Pet[] => { // Add '_' for parent argument
            console.log("--- petsByCategory resolver START ---");
            console.log("Received category:", category);

            const petsForCategory = petData[category];

            if (!petsForCategory || !Array.isArray(petsForCategory)) {
                console.warn(`No pets data found or not an array for category: '${category}'. Returning empty array.`);
                return [];
            }
            return petsForCategory;
        },
    },
    // If you add Mutations later, they would go here:
    // Mutation: {
    //   addPet: (parent, args) => { ... }
    // }
};

export default resolvers; // Export the new resolvers object