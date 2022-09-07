import { useMutation, useQuery } from '@vue/apollo-composable'
import type { Ref } from 'vue'
import { logErrorMessages } from '@vue/apollo-util'
import { CREATE_PET, DELETE_PET, UPDATE_PET } from '@/services/mutation'
import { FIND_PET, GET_PETS } from '@/services/query'
import { petFragment } from '@/services/fragments'
import type { IPet } from '@/services/types'

class Query {
  get = () => {
    const { result, error } = useQuery(GET_PETS)

    if (error.value)
      logErrorMessages(error.value)

    return result
  }

  find = (name: Ref<string>) => {
    const { result, error } = useQuery(FIND_PET, () => ({
      name: name.value,
    }))

    if (error.value)
      logErrorMessages(error.value)

    return result.value
  }
}

class Mutation {
  create = (name: Ref<string>) => {
    const { mutate, onDone } = useMutation(CREATE_PET, () => ({
      variables: {
        name: name.value,
      },

      update: (cache, { data: { name } }) => {
        cache.modify({
          fields: {
            getPets(existingPets = []) {
              const newPetRef = cache.writeFragment({
                data: { name }, fragment: petFragment,
              })

              return [...existingPets, newPetRef]
            },
          },
        })
      },
    }))

    mutate()
    onDone((result) => {
      console.log(result)
    })
  }

  update = (name: Ref<string>, options: Ref<IPet>) => {
    const { mutate, onDone } = useMutation(UPDATE_PET, () => ({
      variables: {
        name: name.value,
      },

      optimisticResponse: {
        updatePet: {
          __typename: 'Pet',
          ...options.value,
        },
      },
    }))

    mutate()
    onDone((result) => {
      console.log(result)
    })
  }

  delete = (name: Ref<string>) => {
    const { mutate, onDone } = useMutation(DELETE_PET, () => ({
      variables: {
        name: name.value,
      },
    }))

    mutate()
    onDone((result) => {
      console.log(result)
    })
  }
}

export const query = new Query()
export const mutation = new Mutation()
