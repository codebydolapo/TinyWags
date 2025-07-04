// graphql/queries.ts
// REMOVE the import { gql } from '@apollo/client'; if you are not using Apollo Client elsewhere in this file
// If you are using it for other Apollo Client specific logic, keep the import,
// but define the queries as plain strings for the fetch call.

// GraphQL Query to get all pets
const GET_ALL_PETS_QUERY = `
  query GetAllPets {
    pets {
      id
      name
      breed
      age
      description
      location
      temperament
      health
      adoptionFee
      imageUrl
      funFact
      agentName
      agentId
    }
  }
`;

// GraphQL Query to get pets by category
const GET_PETS_BY_CATEGORY_QUERY = `
  query GetPetsByCategory($category: String!) {
    petsByCategory(category: $category) {
      id
      name
      breed
      age
      description
      location
      temperament
      health
      adoptionFee
      imageUrl
      funFact
      agentName
      agentId
    }
  }
`;

// GraphQL Query to get a single pet by ID
const GET_PET_BY_ID_QUERY = `
  query GetPetById($id: ID!) {
    pet(id: $id) {
      id
      name
      breed
      age
      description
      location
      temperament
      health
      adoptionFee
      imageUrl
      funFact
      agentName
      agentId
    }
  }
`;

export default {
  GET_ALL_PETS_QUERY,
  GET_PETS_BY_CATEGORY_QUERY,
  GET_PET_BY_ID_QUERY
};