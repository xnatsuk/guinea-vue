import { LocalDateResolver } from 'graphql-scalars'
import Pet from '../../models/pet'

const resolvers = {
  LocalDate: LocalDateResolver,

  Query: {
    getPets: async () => {
      return await Pet.find({})
    },

    findPet: async (root: any, args: any) => {
      return await Pet.findOne({ name: args.name })
    },
  },

  Mutation: {
    createPet: async (root: any, args: any) => {
      const pet = await Pet.findOne({ name: args.name })
      const newPet = new Pet({ name: args.name })
      if (pet)
        throw new Error('Pet already exists')

      try {
        await newPet.save()
      }
      catch (error) {
        throw new Error('Couldn\'t create pet')
      }

      return newPet
    },

    updatePet: async (root: any, args: any) => {
      const pet = await Pet.findOne({ name: args.name })
      if (!pet)
        throw new Error('Pet not found')

      try {
        await Pet.findByIdAndUpdate({ id: pet.id }, { ...args }, { new: true })
      }
      catch (error) {
        throw new Error('Couldn\'t update pet')
      }

      return pet
    },

    deletePet: async (args: any) => {
      const pet = await Pet.findOne({ name: args.name })
      if (!pet)
        throw new Error('Pet not found')

      return await Pet.findByIdAndDelete({ id: pet.id })
    },
  },
}

export default resolvers
