/**
 * Interface for a Dog object.
 */
export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: string;
  description: string;
  location: string;
  temperament: string;
  health: string;
  adoptionFee: number;
  imageUrl: string;
  funFact: string;
  agentName: string; // Optional field for the adoption agent's name
  agentId: string; // Optional field for the adoption agent's ID
}

/**
 * Interface for a Cat object.
 */
export interface Cat {
  id: string;
  name: string;
  breed: string;
  age: string;
  description: string;
  location: string;
  temperament: string;
  health: string;
  adoptionFee: number;
  imageUrl: string;
  funFact: string;
  agentName: string; // Optional field for the adoption agent's name
  agentId: string; // Optional field for the adoption agent's ID
}

/**
 * Interface for a Bird object.
 */
export interface Bird {
  id: string;
  name: string;
  breed: string;
  age: string;
  description: string;
  location: string;
  temperament: string;
  health: string;
  adoptionFee: number;
  imageUrl: string;
  funFact: string;
  agentName: string; // Optional field for the adoption agent's name
  agentId: string; // Optional field for the adoption agent's ID
}

/**
 * Interface for a Rabbit object.
 */
export interface Rabbit {
  id: string;
  name: string;
  breed: string;
  age: string;
  description: string;
  location: string;
  temperament: string;
  health: string;
  adoptionFee: number;
  imageUrl: string;
  funFact: string;
  agentName: string; // Optional field for the adoption agent's name
  agentId: string; // Optional field for the adoption agent's ID
}


/**
 * Union type for any kind of pet.
 */
export type Pet = Dog | Cat | Bird | Rabbit;

/**
 * Interface for the overall pet data structure,
 * containing arrays of different pet types.
 */
export interface PetData {
  "dogs": Dog[];
  "cats": Cat[];
  "birds": Bird[];
  "rabbits": Rabbit[];
}
