// graphql/schema.ts
import { buildSchema } from 'graphql';

// Define the GraphQL schema using SDL (Schema Definition Language)
const schema = buildSchema(`#graphql
 type Pet {
    id: ID!
    name: String!
    breed: String!
    age: String!
    description: String!
    location: String!
    temperament: String!
    health: String!
    adoptionFee: Int!
    imageUrl: String!
    funFact: String!
    agentId: ID!
    agent: Agent!
    randomPets: [Pet!]!
}

type Agent{
    id: ID!,
    name: String!,
    phone: String!,
    email: String!,
    location: String!,
    petsResponsibleFor: [ID]! 
}

  
  type Query {
    pets: [Pet!]!
    pet(id: ID!): Pet
    agents: [Agent!]!
    agent(id: ID!): Agent
    petsByCategory(category: String!): [Pet!]!
  }


  # You can add Mutations later for adding/updating pets if needed
  # type Mutation {
  #   addPet(
  #     name: String!,
  #     breed: String!,
  #     age: String!,
  #     description: String!,
  #     location: String!,
  #     temperament: String!,
  #     health: String!,
  #     adoptionFee: Int!,
  #     imageUrl: String!,
  #     funFact: String!,
  #     agentName: String!,
  #     agentId: ID!
  #   ): Pet!
  # }
`);

export default schema;