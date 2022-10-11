import { DateResolver } from 'graphql-scalars'
import mongoose from 'mongoose'
import type { IPet, Maybe, MutationCreatePetArgs, MutationDeletePetArgs, MutationUpdatePetArgs, QueryFindPetArgs, Resolvers } from 'src/types'
import Pet from '../../models/pet'

const resolvers: Resolvers = {
  Date: DateResolver,

  Query: {
    getPets: async (): Promise<IPet[]> => {
      try {
        return await Pet.find({})
      }
      catch (error) {
        throw new Error('Error getting pets', error)
      }
    },

    findPet: async (_, { name }: QueryFindPetArgs): Promise<Maybe<IPet>> => {
      try {
        return await Pet.findOne({ name })
      }
      catch (error) {
        throw new Error('Error finding pet', error)
      }
    },
  },

  Mutation: {
    createPet: async (_, { createPet }: MutationCreatePetArgs): Promise<Maybe<IPet>> => {
      try {
        const newPet = await Pet.create({
          _id: new mongoose.Types.ObjectId(),
          ...createPet,
        })
        return await newPet.save()
      }
      catch (error) {
        throw new Error('Couldn\'t create pet', error)
      }
    },

    updatePet: async (_, { name, updatePet }: MutationUpdatePetArgs): Promise<Maybe<IPet>> => {
      try {
        return await Pet.findOneAndUpdate({ name }, { ...updatePet }, { new: true })
      }
      catch (error) {
        throw new Error('Couldn\'t update pet', error)
      }
    },

    deletePet: async (_, { name }: MutationDeletePetArgs): Promise<Maybe<IPet>> => {
      try {
        return await Pet.findOneAndDelete({ name })
      }
      catch (error) {
        throw new Error('Couldn\'t delete pet', error)
      }
    },
  },
}

export default resolvers
