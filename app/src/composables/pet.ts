import { useMutation, useQuery } from '@vue/apollo-composable'
import { logErrorMessages } from '@vue/apollo-util'
import { CREATE_PET, DELETE_PET, UPDATE_PET } from '@/services/mutation'
import { FIND_PET, GET_PETS } from '@/services/query'
import type { IPet } from '@/types'

class Query {
  get = () => {
    const { result, error, loading } = useQuery(GET_PETS, null, {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    })

    if (error.value)
      logErrorMessages(error.value)

    return { result, error, loading }
  }

  find = (name: string) => {
    const { result, error } = useQuery(FIND_PET, () => ({
      name,
    }), {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',

    })

    if (error.value)
      logErrorMessages(error.value)

    return { result, error }
  }
}

class Mutation {
  create = (name: string) => {
    const { mutate: createPet } = useMutation(CREATE_PET, () => ({
      variables: {
        name,
      },

      update: (cache, { data: { createPet } }) => {
        let data: any = cache.readQuery({ query: GET_PETS })
        data = { ...data, pets: [...data.pets, createPet] }
        cache.writeQuery({ query: GET_PETS, data })
      },

      errorPolicy: 'all',
    }))

    createPet()
  }

  update = (name: string, options: IPet) => {
    const { mutate: updatePet } = useMutation(UPDATE_PET, () => ({
      variables: {
        name,
        options,
      },
      errorPolicy: 'all',
    }))

    updatePet()
  }

  delete = (name: string) => {
    const { mutate: deletePet } = useMutation(DELETE_PET, () => ({
      variables: {
        name,
      },

      errorPolicy: 'all',
    }))

    deletePet()
  }
}

export const query = new Query()
export const mutation = new Mutation()
