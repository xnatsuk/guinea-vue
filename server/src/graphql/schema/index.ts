import { DateTypeDefinition } from 'graphql-scalars'
import { gql } from 'apollo-server-express'
import type { ApolloServerExpressConfig } from 'apollo-server-express'
import resolvers from '../../graphql/resolvers'

const typeDefs = gql`
  ${DateTypeDefinition}

  type Pet {
    _id: ID
    name: String!
    birthday: Date
    gender: String
    species: String
    nickname: String
    deathDate: Date
    favoriteFood: String
    favoriteActivity: String
    description: String
    photo: String
  }

  input UpdatePet {
    name: String
    birthday: Date
    gender: String
    species: String
    nickname: String
    deathDate: Date
    favoriteFood: String
    favoriteActivity: String
    description: String
    photo: String
  }

  input CreatePet {
    _id: ID
    name: String!
    birthday: Date
    gender: String
    species: String
    nickname: String
    deathDate: Date
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
    createPet(createPet: CreatePet): Pet
    updatePet(name: String! updatePet: UpdatePet): Pet
    deletePet(name: String!): Pet
  }
`
const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers: resolvers as any,
  introspection: true,
  csrfPrevention: true,
}

export default schema
