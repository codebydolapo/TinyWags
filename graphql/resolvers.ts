// graphql/resolvers.ts
import petData from '../data/petData';
import { Pet, PetData } from '../types/petData';
import Agent from '../types/adoptionAgent';
import adoptionAgents from '../data/adoptionAgents';

const allPets: Pet[] = [
    ...petData.dogs,
    ...petData.cats,
    ...petData.birds,
    ...petData.rabbits,
];


const resolvers = {
    Query: {
        pets: (): Pet[] => {
            return allPets;
        },
        pet: (_: any, { id }: { id: string }): Pet | undefined => {
            return allPets.find(pet => pet.id === id);
        },
        agents: (): Agent[] => {
            return adoptionAgents
        },
        agent: (_: any, args: { id: string; }) => {
            return adoptionAgents.find(agent => agent.id === args.id);
        },
        petsByCategory: (_: any, { category }: { category: keyof PetData }): Pet[] => {

            const petsForCategory = petData[category];

            if (!petsForCategory || !Array.isArray(petsForCategory)) {
                console.warn(`No pets data found or not an array for category: '${category}'. Returning empty array.`);
                return [];
            }
            return petsForCategory;
        },
    },
    Pet: {
        agent: (parent: Pet): Agent | undefined => { // 'parent' here is the Pet object being resolved
            return adoptionAgents.find(agent => agent.id === parent.agentId);
        },
        randomPets: (): Pet[] | undefined => {
            const categories: (keyof PetData)[] = ['dogs', 'cats', 'birds', 'rabbits'];
            let randomizedArray = []

            for (let i = 0; i < 3; i++) {
                randomizedArray.push(petData[categories[i]][Math.floor(Math.random() * petData[categories[i]].length)])
            }
            return randomizedArray;
        }
    },
};

export default resolvers;