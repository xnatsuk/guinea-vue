import { gql } from 'graphql-tag'

export const petFragment = gql`
  fragment PetFragment on Pet {
    name
    birthday
    gender
    species
    nickname
    deathDate
    favoriteFood
    favoriteActivity
    description
    photo
  }
  `
