import { LocalDateTypeDefinition } from 'graphql-scalars'
import { gql } from 'apollo-server-express'
import type { ApolloServerExpressConfig } from 'apollo-server-express'
import resolvers from '../../graphql/resolvers'

const typeDefs = gql`
  ${LocalDateTypeDefinition}

  type Query {
    pets: [Pet!]!
    pet(id: ID!): Pet!
  }

  type Mutation {
    createPet(petInput: PetInput): Pet
    updatePet(updatePet: UpdatePet): Pet!
    deletePet(id: ID!): Pet!
  }

  type Pet {
    id: ID
    name: String!
    birthday: LocalDate
    gender: String
    species: String
    nickname: String
    deathDate: LocalDate
    favoriteFood: String
    favoriteActivity: String
    description: String
    photo: String
  }

  input PetInput {
    name: String!
    birthday: LocalDate
  }

  input UpdatePet {
    name: String!
    birthday: LocalDate
    gender: String
    species: String
    nickname: String
    deathDate: LocalDate
    favoriteFood: String
    favoriteActivity: String
    description: String
    photo: String
  }
`
const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
}

export default schema
