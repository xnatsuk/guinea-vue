import { gql } from '@apollo/client/core'
import { petFragment } from './fragments'

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
