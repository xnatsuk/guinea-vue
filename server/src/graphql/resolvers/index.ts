import mongoose from 'mongoose'
import { LocalDateResolver } from 'graphql-scalars'
import Pet from '../../models/pet'

const resolvers = {
  LocalDate: LocalDateResolver,
  Query: {
    pets: async () => {
      return await Pet.find()
    },

    pet: async (parent: any, { id }: any) => {
      try {
        return await Pet.findById(id)
      }
      catch (error) {
        throw new Error('Pet not found')
      }
    },
  },

  Mutation: {
    createPet: async (parent: any, { petInput }: any) => {
      try {
        const pet = await Pet.findOne({ name: petInput.name })
        if (pet) {
          throw new Error('Pet already exists')
        }
        else {
          const newPet = new Pet({
            id: new mongoose.Types.ObjectId(),
            name: petInput.name,
            birthday: petInput.birthday,
          })
          return await newPet.save()
        }
      }
      catch (error) {
        throw new Error('Couldn\'t create pet')
      }
    },

    updatePet: async (parent: any, { id, updatePet }: any) => {
      if (!id || !updatePet)
        throw new Error('Invalid input')

      try {
        return await Pet.findByIdAndUpdate(id, updatePet, { new: true })
      }
      catch (error) {
        throw new Error('Couldn\'t update pet')
      }
    },

    deletePet: async (parent: any, { id }: any) => {
      if (!id)
        throw new Error('Invalid input')

      try {
        return await Pet.findByIdAndDelete(id)
      }
      catch (error) {
        throw new Error('Couldn\'t delete pet')
      }
    },
  },
}

export default resolvers
