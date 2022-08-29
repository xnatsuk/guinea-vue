import { gql } from 'graphql-tag'
import { petFragment } from '../composables/fragments'

export const GET_PETS = gql`
  query GetPets {
    getPets {
      ...PetFragment
  }
}
${petFragment}
  `

export const FIND_PET = gql`
  query FindPet($name: String!) {
    findPet(name: $name) {
      ...PetFragment
    }
  }
  ${petFragment}
`
