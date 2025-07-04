// graphql/schema.ts
import { buildSchema } from 'graphql';

// Define the GraphQL schema using SDL (Schema Definition Language)
const schema = buildSchema(`
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
  agentName: String!
  agentId: ID!
}

  type Query {
    pets: [Pet!]!
    pet(id: ID!): Pet
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