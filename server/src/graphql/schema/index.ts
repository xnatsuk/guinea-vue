import { LocalDateTypeDefinition } from 'graphql-scalars'
import { gql } from 'apollo-server-express'
import type { ApolloServerExpressConfig } from 'apollo-server-express'
import resolvers from '../../graphql/resolvers'

const typeDefs = gql`
  ${LocalDateTypeDefinition}

  type Pet {
    id: ID!
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

  type Query {
    getPets: [Pet!]!
    findPet(name: String!): Pet
  }

  type Mutation {
    createPet(name: String!): Pet
    updatePet(updatePet: UpdatePet): Pet
    deletePet(name: String!): Pet
  }
`
const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  csrfPrevention: true,
}

export default schema
