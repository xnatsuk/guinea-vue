import { provideApolloClient, useMutation, useQuery } from '@vue/apollo-composable'
import { logErrorMessages } from '@vue/apollo-util'
import { CREATE_PET, DELETE_PET, UPDATE_PET } from '@/services/mutation'
import { FIND_PET, GET_PETS } from '@/services/query'
import type { IPet } from '@/types'
import { apolloClient } from '@/apollo-client'

provideApolloClient(apolloClient)
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
    const { result, error, loading } = useQuery(FIND_PET, () => ({
      name,
    }), {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',

    })

    if (error.value)
      logErrorMessages(error.value)

    return { result, error, loading }
  }
}

class Mutation {
  create = (options: IPet) => {
    const { mutate: createPet, error: createError, loading: createLoading } = useMutation(CREATE_PET, () => ({
      variables: {
        createPet: options, // variable must be named as the mutation input in the schema
      },

      // update: (cache, { data: { createPet } }) => {
      //   let data: any = cache.readQuery({ query: GET_PETS })
      //   data = { ...data, pets: [...data.pets, createPet] }
      //   cache.writeQuery({ query: GET_PETS, data })
      // },

      errorPolicy: 'all',
    }))

    if (createError.value)
      logErrorMessages(createError.value)

    return { createPet, createError, createLoading }
  }

  update = (name: string, options: IPet) => {
    const { mutate: editPet, error: updateError, loading: updateLoading } = useMutation(UPDATE_PET, () => ({
      variables: {
        name,
        updatePet: options, // same as above
      },

      errorPolicy: 'all',
    }))

    if (updateError.value)
      logErrorMessages(updateError.value)

    return { editPet, updateError, updateLoading }
  }

  delete = (name: string) => {
    const { mutate: deletePet, error: deleteError, loading: deleteLoading } = useMutation(DELETE_PET, () => ({
      variables: {
        name,
      },

      errorPolicy: 'all',
    }))

    return { deletePet, deleteError, deleteLoading }
  }
}

export const query = new Query()
export const mutation = new Mutation()
