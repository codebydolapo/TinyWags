// GraphQL Query to get all pets
const GET_ALL_PETS_QUERY = `#graphql
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
      agentId
      # agent{
      #   id
      #   name
      #   phone
      #   email
      #   location
      #   petsResponsibleFor
      # }
    }
  }
`;


const GET_PETS_BY_CATEGORY_QUERY = `#graphql
  query GetPetsByCategory($category: String!) {
    petsByCategory(category: $category) {
      id
      name
      breed
      age
      location
      temperament
      health
      adoptionFee
      imageUrl
      agentId
      # agent{
      #   id
      #   name
      #   phone
      #   email
      #   location
      #   petsResponsibleFor
      # }
    }
  }
`;


const GET_PET_BY_ID_QUERY = `#graphql
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
      agentId
      agent{
        id
        name
        phone
        email
        location
        petsResponsibleFor
      }
      randomPets{
        id
        name
        breed
        age
        imageUrl
      }
    }
  }
`;

const GET_ADOPTION_AGENTS_QUERY = `#graphql
query GetAdoptionAgents(){
  agents{
  id,
    name,
    phone,
    email,
    location,
    petsResponsibleFor 
  }
}`

const GET_ADOPTION_AGENTS_BY_ID_QUERY = `#graphql
query GetAdoptionAgentsById($id: ID!){
  agent(id: $id){
  id,
    name,
    phone,
    email,
    location,
    petsResponsibleFor 
  }
}`



export default {
  GET_ALL_PETS_QUERY,
  GET_PETS_BY_CATEGORY_QUERY,
  GET_PET_BY_ID_QUERY,
  GET_ADOPTION_AGENTS_QUERY,
  GET_ADOPTION_AGENTS_BY_ID_QUERY,
  // GET_RANDOM_PET_QUERY
}