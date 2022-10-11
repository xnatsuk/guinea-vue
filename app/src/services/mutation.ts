import { gql } from 'graphql-tag'
import { petFragment } from './fragments'

export const CREATE_PET = gql`
  mutation CreatePet($createPet: CreatePet) {
    createPet(createPet: $createPet) {
      ...PetFragment
    }
  }
  ${petFragment}
`

export const UPDATE_PET = gql`
  mutation UpdatePet($name: String!, $updatePet: UpdatePet) {
    updatePet(name: $name, updatePet: $updatePet) {
      name
        ...PetFragment
    }
  }
  ${petFragment}
`

export const DELETE_PET = gql`
  mutation DeletePet($name: String!) {
    deletePet(name: $name) {
      name
    }
  }
`
